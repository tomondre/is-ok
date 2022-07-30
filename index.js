import express from 'express'
import fetch from "node-fetch";
import cors from 'cors'

let app = express();
app.use(cors());

app.get('/', async (req, res) => {
    let url = req.query.url;

    if (url === undefined) {
        res.status(400);
        res.send('Please provide url parameter');
        return;
    }

    try {
        await fetch(url)
        res.send("OK");
    } catch (error) {
        res.status(404);
        res.send(error);
    }
});

app.get('/health', (req, res) => {
    res.send('I am fine, let me sleep!');
});


app.listen(8080, () => {
    console.log('Server is running on port 8080');
});