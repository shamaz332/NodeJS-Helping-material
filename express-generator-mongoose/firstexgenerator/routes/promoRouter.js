const express = require('express')
const bodyParser = require('body-parser')
const Promotions = require('../models/promo');

const promoRouter = express.Router()
promoRouter.use(bodyParser.json())
promoRouter.route('/')
    .get((req, res, next) => {
        Promotions.find({})
            .then((promotions) => {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json');
                res.json(promotions)
            },
                (err) => next(err))
            .catch((err) => next(err))

    })

    .post((req, res, next) => {
        Promotions.create(req.body)
            .then((promotions) => {
                console.log('Promotion  Created ', promotions)
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promotions)
            },
                (err) => next(err))
            .catch((err) => next(err))
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('Put operation not supported on all Promotions.It done on single promotion')
    })

    .delete((req, res, next) => {
        Promotions.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp)
            },
                (err) => next(err))
            .catch((err) => next(err));
    });



//This is for single promotion

promoRouter.route('/:promoId')
    .get((req, res, next) => {
        Promotions.findById(req.params.promoId)
            .then((promotions) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promotions);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403
        res.end('post operation not supported on promotion :' + req.params.promoId)
    })
    .put((req, res, next) => {
        Promotions.findByIdAndUpdate(req.params.promoId, {
            $set: req.body
        },
            {
                new: true
            })
            .then((promotions) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promotions);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Promotions.findByIdAndDelete(req.params.promoId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
module.exports = promoRouter;
