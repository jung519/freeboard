var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fb = require('../models/board.js');

/* set schema */
var boardList = fb.model('BoardList');
var boardDetail = fb.model('BoardDetail');


/* board */
router.get('/', function (req, res, next) {
    boardList.find({del_yn : "n"}, function (err, products) {
        if (err) return next(err);
        let sssn = req.session
        ,   param = {
            data : products,
            session : sssn
        };
        res.json(param);
    });
});

/* board - findOne */
router.get('/boardTitle/:b_code', function (req, res, next) {
    boardList.findOne({ b_code : req.params.b_code }, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* boardDetail - list */
router.get('/b_code/:b_code', function (req, res, next) {
    boardDetail.find({ b_code: req.params.b_code, del_yn: "n" }).sort({ regist_date : -1}).exec(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* board-detail */
router.get('/id/:id', function (req, res, next){
    boardDetail.findById(req.params.id,function (err, products){
        if (err) return next(err);
        res.json(products);
    });
});

/* board_write : add */
router.post('/write', function (req, res, next) {
    boardDetail.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* board : delete */
router.post('/delete/:id', function (req, res, next) {
    boardDetail.findByIdAndUpdate(req.params.id, { del_yn: "y" }, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* board - edit : update */
router.post('/editBoard/:id', function (req, res, next) {
    boardDetail.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* board - counterIncrease : update */
router.post('/counterIncrease/:id', function (req, res, next) {
    boardDetail.findByIdAndUpdate(req.params.id, { $inc: { counter: 1 } }, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* admin  : get */
router.get('/admin', function (req, res, next) {
    boardList.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* admin : delete */
router.delete('/admin/:id', function (req, res, next) {
    boardList.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* admin : add */
router.post('/admin', function (req, res, next) {
    boardList.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* admin - edit : get */
router.get('/edit/:id', function (req, res, next) {
    boardList.findById(req.params.id, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* admin - edit : update */
router.put('/edit/:id', function (req, res, next) {
    boardList.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* admin - boardDeleteCheck : get */
router.get('/boardDeleteCheck/:b_code', function (req, res, next) {
    boardDetail.count({b_code : req.params.b_code}, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});


module.exports = router;
