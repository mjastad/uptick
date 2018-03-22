var express = require('express');

var routes = function(Peak){
    var peakRouter = express.Router();

    peakRouter.route('/')
        .post(function(req, res){
            var peak = new Peak(req.body);
            peak.save();
            res.status(201).send(peak);
        })
        .get(function(req, res){
            var query = {}
            if(req.query.peak){
                query.peak = req.query.peak;
            }
	    if (req.query.state){
                query.state = req.query.state;
            }
	    if (req.query.rank){
                query.rank = req.query.rank;
            }
	    if (req.query.range){
                query.range = req.query.range;
            }
	    if (req.query.elevation){
                query.elevation = req.query.elevation;
            }

            Peak.find(query, function(err, peaks){
                if(err)
                    res.status(500).send(err)
                else
	            var returnPeaks = [];
                    peaks.forEach(function(element, index, array){
                        var newPeak = element.toJSON();
                        newPeak.links = {};
                        newPeak.links.self = 'http://' + req.headers.host + '/api/peaks/' + newPeak._id
                        returnPeaks.push(newPeak);
                    })
                    res.json(returnPeaks);
            });
        });
    peakRouter.use('/:peakId', function(req, res, next){
        Peak.findById(req.params.peakId, function(err, peak){
            if(err){
                res.status(500).send(err)
            }
            else if(peak){
                req.peak = peak;
                next();
            }
            else {
                res.status(404).send('No peak found');
            }

        });
    });
    peakRouter.route('/:peakId')
        .get(function(req, res){
	    var returnPeak = req.peak.toJSON();
            returnPeak.links = {};
            var newLink = 'http://' + req.headers.host + '/api/peaks/?range=' + returnPeak.range;
            returnPeak.links.FilterByThisRange = newLink.replace(/ /g, '%20');
            var newLink = 'http://' + req.headers.host + '/api/peaks/?state=' + returnPeak.state;
            returnPeak.links.FilterByThisState = newLink.replace(/ /g, '%20');
            res.json(returnPeak);
        })
        .put(function(req, res){
            req.peak.rank = req.body.rank;
            req.peak.peak = req.body.peak;
            req.peak.elevation = req.body.elevation;
            req.peak.state = req.body.state;
            req.peak.range = req.body.range;
            req.peak.save(function(err){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(req.peak);
                }
            });
        })
        .patch(function(req, res){
            if(req.body._id){
                delete req.body._id;
            }
            for(var p in req.body){
                req.peak[p] = req.body[p];
            }
            req.peak.save(function(err){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(req.peak);
                }
            });
        })
        .delete(function(req, res){
            req.peak.remove(function(err){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.status(204).send('Removed');
                }
            });    
        });

    return peakRouter; 
};

module.exports = routes;
