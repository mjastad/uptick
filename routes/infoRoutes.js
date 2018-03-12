var express = require('express');
var os = require('os');

var routes = function(){
    var ipRouter = express.Router();

    ipRouter.route('/')
        .get(function(req, res){
            var ifaces = os.networkInterfaces();
            var returnInfo = {};
            returnInfo['hostname'] = os.hostname();
            Object.keys(ifaces).forEach(function (ifname) {
                ifaces[ifname].forEach(function (iface) {
                    if ('IPv4' !== iface.family || iface.internal !== false) {
                        return;
                    }

                    if (ifname == 'eth0' || ifname.indexOf('ens') !== -1){
                        returnInfo['ip'] = iface.address;
                    }
                });
            });
            res.json(returnInfo);
        });

    return ipRouter; 
};

module.exports = routes;
