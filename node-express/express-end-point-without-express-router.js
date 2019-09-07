// const express = require('express')
// const http = require('http')
// const morgan = require('morgan')
// const bodyParser = require('body-parser');

// const hostname = 'localhost'
// const port = 3000


// //in this way we are saying that our application is going to usre the express node modules

// const app = express();
// app.use(morgan('dev'))
// app.use(bodyParser.json())


// //This is for all dishes
// app.all('/dishes', (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain')
//     next()
// })

// app.get('/dishes', (req, res, next) => {
//     res.end('Will send all dishes to you!')

// })

// app.post('/dishes', (req, res, next) => {
//     res.end('Will add the dish :' + req.body.name + 'With details :' + req.body.description)

// })
// app.put('/dishes', (req, res, next) => {
//     res.statusCode = 403
//     res.end('Put ioperation not supported on dishes')
// })
// app.delete('/dishes', (req, res, next) => {
//     res.end('Delete all diushes')

// })

// //This is for single dishe
// app.all('/dishes/:dishId', (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain')
//     next()
// })

// app.get('/dishes/:dishId', (req, res, next) => {
//     res.end('Will send deatils of dish :' + req.params.dishId)

// })

// app.post('/dishes/:dishId', (req, res, next) => {
//     res.statusCode = 403
//     res.end('Put ioperation not supported on dish :' + req.params.dishId)
// })
// app.put('/dishes/:dishId', (req, res, next) => {
//     //res.write is used for reply message to show to the user
//     res.write('Updating the dish :' + req.params.dishId + '\n')
//     res.end('Will update the dish :' + req.body.name + 'with details :' + req.body.description)
// })
// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end('Delete dish :' + req.params.dishId)

// })





// app.use(express.static(__dirname + '/public'))

// //here we will create a method that will be used to setup our server


// //next is use when we invoke additional middleware to take care of work on your behalf
// //next is optional paremeter that can't be included if we are not gouing to use it within code.


// app.use((req, res, next) => {
//     // console.log(req.headers);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html')
//     res.end('<html><body><h1>express</h1></body></html>')
// })
// const server = http.createServer(app);
// server.listen(port, hostname, () => {
//     console.log('server running')
// })