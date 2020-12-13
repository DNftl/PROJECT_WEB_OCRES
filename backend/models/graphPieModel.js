const mongoose = require('mongoose');

const graphPieeMod = new mongoose.Schema({
    event : String,
    
    budget :String,
    
    });

module.exports = mongoose.model('Graphpie', graphPieeMod);