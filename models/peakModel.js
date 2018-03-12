var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peakModel = new Schema({
    rank: {
        type: String
    },
    peak: {
        type: String
    },
    elevation: {
        type: String
    },
    state: {
        type: String
    },
    range: {
        type: String
    }
});

module.exports = mongoose.model('Peak', peakModel);
