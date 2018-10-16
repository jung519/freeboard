var mongoose = require('mongoose');

/* counters */
const Counters = new mongoose.Schema({
    _id: String,
    code_name: String,
    etc: String,
    sequence_value: {type:Number, default:0},
}, {
        collection: "counters"
    });
module.exports = mongoose.model('Counters', Counters);