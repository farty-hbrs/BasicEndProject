var express = require('express');
var router = express.Router();
let salesman = require('../models/salesman');
let mongoose = require('mongoose');
let mongo= require('mongodb');
let assert = require('assert');
let db = require('../src/database');
var createError = require('http-errors');
var SalesmanController =  require("../controllers/salesman");

/* GET home page. */

router.get('/', function (req, res, next) {
    SalesmanController.getSalesmen(req, res ,next);
});

router.post('/',function(req,res,next) {
    SalesmanController.createSalesman(req, res, next);
});

router.get('/:id',function (req,res,next) {
    SalesmanController.getSalesman(req, res, next);
});

router.delete ('/',function (req,res,next) {
   SalesmanController.deletSalesman(req,res,next);

});

router.put('/',function (req,res,next) {
    SalesmanController.updateSalesman(req,res,next);
});


//********************** hier eine methode die mehrere salesman zurück gibt**********************




module.exports = router;
