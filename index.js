let express = require('express');
let app = express();

app.get('/',(req,res)=>{
    //req.body
   // req.params
   // req.query
    res.send('world')
})


app.get('/hello',(req,res)=>{
    res.send('hello world')
})

app.get('/:input',(req,res)=>{
    res.send('hello world ' + req.params.input)
})

app.get('/smart/:name',(req,res)=>{
    res.send(req.params.name + " is so smart")
})

/*
const nickSmart =(req,res)=>{
    res.send('nick is smart')
}

app.get('/',nickSmart) 
*/

app.listen(3000, ()=>{console.log('port 3000 listening')})