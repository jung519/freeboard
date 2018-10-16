var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fb = require('../models/member.js');

/* set schema */
var member = fb.model('Member');

/* emailCheck : get */
router.get('/emailCheck/:email', function (req, res, next) {
    member.count({ email: req.params.email }, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* join : add */
router.post('/join', function(req, res, next){
    member.create(req.body, function(err, post){
        if (err) return next(err);
        res.json(post);    
    })
});

/* login : get */
router.post('/login', function (req, res, next) {
    member.findOne({email:req.body.email, password:req.body.password, del_yn:'n'}, function(err,post){
        if (err) return next(err);
        setSession(req, post);
        res.json(getSesseion(req));
    })
});

/* getSession */
router.post('/getSession', function (req, res, next) {
    res.json(getSesseion(req));
});

/* setLogout */
router.post('/setLogout', function (req, res, next) {
    res.json(setLogout(req));
});


function setSession(req, data){
    console.log("************ setSession ************");
    let sssn = req.session;
    let memberInfo = data;
    if (memberInfo != undefined) {
        sssn.id_code = memberInfo.id_code;
        sssn.email = memberInfo.email;
        sssn.name = memberInfo.name;
    }
}

function getSesseion(req){
    console.log("************ getSession **************");
    let sssn = req.session;
    return sssn;
}

function setLogout(req){
    let sssn = req.session;
    if (sssn.email) {
        req.session.destroy(function (err) {
            if (err) {
                console.log(err);
            }
        })
    }
    return sssn;
}

module.exports = router;