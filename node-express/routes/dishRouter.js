const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router()
dishRouter.use(bodyParser.json())
dishRouter.route('/')

    //This is for all dishes
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        next()
    })

    .get((req, res, next) => {
        res.end('Will send all dishes to you!')

    })

    .post((req, res, next) => {
        res.end('Will add the dish :' + req.body.name + 'With details :' + req.body.description)

    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('Put ioperation not supported on dishes')
    })
    .delete((req, res, next) => {
        res.end('Delete all diushes')

    });
//This is for single dishe


dishRouter.all('/:dishId', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next()
})

    .get('/:dishId', (req, res, next) => {
        res.end('Will send deatils of dish :' + req.params.dishId)

    })

    .post('/:dishId', (req, res, next) => {
        res.statusCode = 403
        res.end('Put ioperation not supported on dish :' + req.params.dishId)
    })
    .put('/:dishId', (req, res, next) => {
        //res.write is used for reply message to show to the user
        res.write('Updating the dish :' + reqparams.dishId + '\n')
        res.end('Will update the dish :' + req.body.name + 'with details :' + req.body.description)
    })
    .delete('/:dishId', (req, res, next) => {
        res.end('Delete dish :' + req.params.dishId)

    });
module.exports = dishRouter;
