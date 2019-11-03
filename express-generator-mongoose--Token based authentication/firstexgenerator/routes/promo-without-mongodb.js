// const express = require('express')
// const bodyParser = require('body-parser')

// const promoRouter = express.Router()
// promoRouter.use(bodyParser.json())
// promoRouter.route('/')

//     //This is for all promotions
//     .all((req, res, next) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain')
//         next()
//     })

//     .get((req, res, next) => {
//         res.end('Will send all Promotions list to you!')

//     })

//     .post((req, res, next) => {
//         res.end('Will add the Promotions :' + req.body.name + 'With details :' + req.body.description)

//     })
//     .put((req, res, next) => {
//         res.statusCode = 403
//         res.end('Put operation not supported on Promotions')
//     })
//     .delete((req, res, next) => {
//         res.end('Delete all Promotions')

//     });



// //This is for single promotion


// promoRouter.all('/:promoId', (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain')
//     next()
// })

//     .get('/:promoId', (req, res, next) => {
//         res.end('Will send deatils of promotion :' + req.params.promoId)

//     })

//     .post('/:promoId', (req, res, next) => {
//         res.statusCode = 403
//         res.end('Put ioperation not supported on promotion :' + req.params.promoId)
//     })
//     .put('/:promoId', (req, res, next) => {
//         //res.write is used for reply message to show to the user
//         res.write('Updating the promotion :' + reqparams.promoId + '\n')
//         res.end('Will update the promotion :' + req.body.name + 'with details :' + req.body.description)
//     })
//     .delete('/:promoId', (req, res, next) => {
//         res.end('Delete promotion :' + req.params.promoId)

//     });
// module.exports = promoRouter;
