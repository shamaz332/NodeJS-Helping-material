const express = require('express')
const bodyParser = require('body-parser')

const leaderRouter = express.Router()
leaderRouter.use(bodyParser.json())
leaderRouter.route('/')

    //This is for all leaders
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        next()
    })

    .get((req, res, next) => {
        res.end('Will send all leader list to you!')

    })

    .post((req, res, next) => {
        res.end('Will add the leader :' + req.body.name + 'With details :' + req.body.description)

    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('Put operation not supported on leader')
    })
    .delete((req, res, next) => {
        res.end('Delete all leader')

    });

//This is for single Leader


leaderRouter.all('/:leaderId', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next()
})

    .get('/:leaderId', (req, res, next) => {
        res.end('Will send deatils of leader :' + req.params.leaderId)

    })

    .post('/:leaderId', (req, res, next) => {
        res.statusCode = 403
        res.end('Put ioperation not supported on leader :' + req.params.leaderId)
    })
    .put('/:leaderId', (req, res, next) => {
        //res.write is used for reply message to show to the user
        res.write('Updating the leader :' + reqparams.leaderId + '\n')
        res.end('Will update the leader :' + req.body.name + 'with details :' + req.body.description)
    })
    .delete('/:leaderId', (req, res, next) => {
        res.end('Delete leader :' + req.params.leaderId)

    });

module.exports = leaderRouter;
