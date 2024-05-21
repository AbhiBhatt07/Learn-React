import express from 'express'
const app = express();

app.get('/', (req, res)=>{
    res.send('Server is ready');
})

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id : 1,
            title : 'ha ha ha ha ha ha',
            content : "First joke"
        },
        {
            id : 2,
            title : 'ha ha ha ha ha ha',
            content : "Second joke"
        },
        {
            id : 3,
            title : 'ha ha ha ha ha ha',
            content : "Third joke"
        },
        {
            id : 4,
            title : 'ha ha ha ha ha ha',
            content : "Fourth joke"
        },
        {
            id : 5,
            title : 'ha ha ha ha ha ha',
            content : "Fifth joke"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
})