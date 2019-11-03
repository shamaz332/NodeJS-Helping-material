const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter')
const leaderRouter = require('./routes/leaderRouter')
const promoRouter = require('./routes/promoRouter')
const hostname = 'localhost'
const port = 3000


//in this way we are saying that our application is going to usre the express node modules

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json())

//dishRouter k0o mount krna h ab
app.use('/dishes/', dishRouter);
app.use('/leaders',  leaderRouter);
app.use('/promotions', promoRouter);

app.use(express.static(__dirname + '/public'))

//here we will create a method that will be used to setup our server


//next is use when we invoke additional middleware to take care of work on your behalf
//next is optional paremeter that can't be included if we are not gouing to use it within code.


app.use((req, res, next) => {
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>express</h1></body></html>')
})
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log('server running')
})