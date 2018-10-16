var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fb = require('../models/common.js');

/* set schema */
var counters = fb.model('Counters');


/* counters */
router.get('/counters', function (req, res, next) {
    counters.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* counters : _id */
router.get('/counters/:id', function (req, res, next) {
    counters.findById(req.params.id, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* counters : autoIncreace */
router.post('/seqInc/:id', function (req, res, next) {
    counters.findOneAndUpdate({_id:req.params.id},{ $inc: { sequence_value: 1 } }, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });

});

/* sequenceAdd */
router.post('/sequenceAdd', function (req, res, next){
    counters.create(req.body,function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* sequenceDelete */
router.delete('/delete/:id', function(req, res, next){
    counters.findOneAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});


module.exports = router;
