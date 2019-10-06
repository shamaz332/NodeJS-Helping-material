const express = require('express')
const bodyParser = require('body-parser')
const Leaders = require('../models/leader');

const leaderRouter = express.Router()
leaderRouter.use(bodyParser.json())
leaderRouter.route('/')
    .get((req, res, next) => {
        Leaders.find({})
        .then((leader)=>{
            res.statusCode=200
            res.setHeader('Content-Type', 'application/json');
            res.json(leader)
        },
            (err) => next(err))
            .catch((err) => next(err))

    })

    .post((req, res, next) => {
        Leaders.create(req.body)
        .then((leader)=>{
            console.log('Leader  Created ', leader)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leader)
        },
            (err) => next(err))
            .catch((err) => next(err))
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('Put operation not supported on leader')
    })
    .delete((req, res, next) => {
        Leaders.remove({})
        .then((resp)=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp)
        },
            (err) => next(err))
            .catch((err) => next(err));

    });

//This is for single Leader


leaderRouter.route('/:leaderId')
    .get((req, res, next) => {
        Leaders.findById(req.param.leaderId)
        .then((leader)=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leader);
        }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req, res, next) => {
        res.statusCode = 403
        res.end('Put ioperation not supported on leader :' + req.params.leaderId)
    })
    .put((req, res, next) => {
        Leaders.findByIdAndUpdate(req.params.promoId, {
            $set: req.body
        },
            {
                new: true
            })
            .then((leader) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(leader);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Leaders.findByIdAndDelete(req.params.promoId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));

    });

module.exports = leaderRouter;
