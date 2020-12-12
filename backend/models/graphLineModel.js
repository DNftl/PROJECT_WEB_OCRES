const mongoose = require('mongoose');

const graphLineMod = new mongoose.Schema({
    month : String,
    
    income :String,

    outcome :String,
    
    });

module.exports = mongoose.model('Graphline', graphLineMod);