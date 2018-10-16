var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fb = require('../models/comment.js');

/* set schema */
var comment = fb.model('Comment');

/* comment : getList */
router.get('/comment/:target_id', function (req, res, next) {
    comment.find({ target_id: req.params.target_id }, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* comment : save */
router.post('/comment_add', function (req, res, next) {
    comment.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* comment : delete */
router.delete('/remove/:id', function (req, res, next) {
    comment.findByIdAndRemove(req.params.id, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});


module.exports = router;