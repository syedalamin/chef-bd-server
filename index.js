const express = require('express');
const app = express();
const cors = require('cors');
const chef = require('./data/chef.json')
const port = process.env.port || 5000;


app.get('/',(req, res)=>{
    res.send('Chef BD Server Is Running')
});

app.use(cors());

app.get('/chef', (req, res)=>{
    res.send(chef)
});

app.listen(port, () =>{
    console.log(`Chef BD Server Is Running: ${port}`)
});


