const express = require('express');
const app = express();
const cors = require('cors');
const chef = require('./data/chef.json');
const details = require('./data/details.json');
const port = process.env.port || 5000;


app.get('/',(req, res)=>{
    res.send('Chef BD Server Is Running')
});
app.use(cors());

app.get('/chef', (req, res)=>{
    res.send(chef)
});

app.get('/details', (req, res) =>{
    res.send(details)
});


app.get('/chef/:id', (req, res) =>{
    const id = parseInt(req.params.id);

    if(id === 0){
        res.send(details)
    }
    else{
        const chefDetails = details.filter(n =>parseInt( n.id )=== id)
    res.send(chefDetails)
    }
    
})

 
 







app.listen(port, () =>{
    console.log(`Chef BD Server Is Running: ${port}`)
});


