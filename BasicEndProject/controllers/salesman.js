var express = require('express');
let salesman = require('../models/salesman');
let mongoose = require('mongoose');
    var id = 0;
var uniqueID = (function() {
     // This is the private persistent value
    // The outer function returns a nested function that has access
    // to the persistent value.  It is this nested function we're storing
    // in the variable uniqueID above.
    return function() { return id++; };  // Return and increment
})(); // Invoke the outer function after defining it.

exports.getSalesmen = function(req, res, next) {

    mongoose.connection.db.collection('salesmen').find().toArray((err,items)=>{
        if(err){
            res.send(err);
        }
        res.send(items);
    })
};
exports.getSalesman =function (req,res,next) {
    var promise =  salesman.findOne({id:parseInt(req.params.id)}).exec();
    promise.then(function (salesman) {
        if(!salesman){
            res.send('THIS ID DOES NOT EXIST');
            throw new Error('Salesman not found');
        }
        return res.status(200).json(salesman)
    }).catch(function (err) {
        console.log(err);
        return res.status(404).json({ });
    })
};

exports.createSalesman =function(req,res,next) {

    var salesM = new salesman({
        id:uniqueID() ,
        name: req.body.name,
        age: req.body.age
    });
    salesM.save();
    res.send("salesman "+ req.body.name + " was added " );
};

exports.deletSalesman= function (req,res,next) {

    salesman.deleteOne({id:parseInt(req.body.id)}, function (err) {
        if (err) {
            console.log('id not found');
        }

    });
    res.send('deleted');

};

exports.updateSalesman = function (req,res,next) {
    var conditions = {id:parseInt(req.body.id)};
    salesman.findOneAndUpdate( conditions
        , { $set: { name:req.body.name, age:req.body.age }},{new:true},function (err,doc) {
            res.send('updated')
        });
};
