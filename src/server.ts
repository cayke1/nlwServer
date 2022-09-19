import express from "express";

const app = express();

app.get('games', (req, res) => {
    return res.json([]);
});

app.post('/ads', (req, res) => {
    return res.status(200).json()
})

app.get('/games/:id/ads', (req, res) => {
    res.json({'ok': 'true'});
})

app.listen(3333, () => {
    console.log('Server running at 3333')
});