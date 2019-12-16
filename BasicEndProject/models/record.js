let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recordSchema= new Schema({
    id:Number,
    g_id:Number,
    g_desc:String,
    target_v:Number,
    actual_v:Number,
    year:Number
});

var record = mongoose.model('record',recordSchema);
module.exports=record;