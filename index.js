const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const catagoris = require('./data/catagoris.json');
const news = require('./data/news.json');

app.use(cors());


app.get('/', (req, res)=>{
    res.send('Dragon is  Running')
})


app.get('/catagoris', (req, res)=>{
    res.send(catagoris);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id' , (req, res)=>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})

app.get('/catagoris/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    if(id === 0){
        res.send(news)
    }
    else{
        const catagoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(catagoryNews)
    }

})


app.listen(port, () =>{
    console.log(`daragon API ${port}`)
})