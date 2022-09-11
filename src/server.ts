import express from "express";

const app = express();

app.get('/ads', (request, response) => {
    response.json({'ok': 'true'});
})

app.listen(3333, () => {
    console.log('Server running at 3333')
});