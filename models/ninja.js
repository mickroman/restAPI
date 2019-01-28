const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation Schema
const GeoSchema= newSchema({
    type:{
        type: String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index: "2dsphere"
    }
});

// create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        requires: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available:{
        type: Boolean,
        default: false
    },
geometry:GeoSchema
    
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.export = Ninja;
