let mongoose = require('mongoose');
var p_record = require('../models/record');


exports.getRecords = function(req, res, next) {
    mongoose.connection.db.collection('records').find().toArray((err,items)=>{
        res.send(items);
    });
};
exports.getRecord = function (req,res,next) {
    mongoose.connection.db.collection('records').find({id:parseInt(req.params.id)}).toArray((err, items)=> {
        if (err) {
            res.send('Error');
            throw new Error('record is not found');
        }
        res.send(items);

    })};

exports.createRecord = function (req, res, next) {
    var record = new p_record({
        id:req.body.id,
        g_id:req.body.g_id,
        g_desc:req.body.g_desc,
        target_v:req.body.target_v,
        actual_v:req.body.actual_v,
        year:req.body.year
    });
    record.save();
    res.send('The record with the goal description: ' +req.body.g_desc+' was just added');
};

exports.deleteRecord = function (req, res, next) {
    p_record.deleteOne({id:req.body.id,g_id:req.body.g_id}, function (err) {
        if(err){
            res.send('Ein Fehler is aufgetreten');
        }
        res.send('Deleted');
    })
};

exports.updateRecord = function (req, res, next) {
    p_record.findOneAndUpdate({id:req.body.id,g_id:req.body.g_id}
        ,{$set: {g_desc:req.body.g_desc,target_v:req.body.target_v,actual_v:req.body.actual_v,year:req.body.year}}
        ,{new:true}, function (err) {
            if(err) res.send('fehler aufgetreten');
            res.send('Document wurde aktulisiert');
        });
};
