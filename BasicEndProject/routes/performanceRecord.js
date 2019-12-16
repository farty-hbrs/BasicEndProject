var express = require('express');
var router = express.Router();
var db = require('../src/database');
var p_record = require('../models/record');
var mongoose= require('mongoose');
var RecordController = require('../controllers/record');


/* GET home page. */
router.get('/', function(req, res, next) {
    RecordController.getRecords(req,res,next);
});

router.get('/:id',function (req,res,next) {
    RecordController.getRecord(req,res, next);
});

router.post('/',function (req, res, next) {
       RecordController.createRecord(req, res, next);
});

router.delete('/',function (req, res, next) {
    RecordController.deleteRecord(req, res, next);
});

router.put('/',function (req, res, next) {
    RecordController.updateRecord(req, res, next);
});

module.exports = router;

/*
dummy
"id":"1",
        "g_id":"1",
        "g_desc":"test",
        "target_v":"4",
        "actual_v":"3",
        "year":"2019"
 */
