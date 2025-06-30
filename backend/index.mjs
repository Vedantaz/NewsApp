import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
import dotenv from 'dotenv'
import axios from 'axios'; 
dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
const apiKey = process.env.NEWS_API_KEY;

app.get('/api/news', async(req, res)=>{
    
    try{
        const {category = 'general', q='bitcoin'} = req.query;
        console.log('Query params recieved: ', req,query);

    const newsData = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`); 
        res.json(newsData.data)
        console.log(newsData.data);
    }catch(err){
        console.error('Error fetching news:', err.message);
    res.status(500).json({ error: 'Failed to fetch news data' });
    }
})


app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
});