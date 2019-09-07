var react = require('./rectangle')

function solver(l,b){
    react(l,b,(err,reactangle)=>{
        if(err)
        {
            console.log("ERROE",err.message)
        }
        else{
            console.log("Area is ", reactangle.area())
        }
    })
}
solver(-1,0);