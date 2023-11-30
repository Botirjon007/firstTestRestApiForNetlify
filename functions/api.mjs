import express from 'express';
import bodyParser from 'body-parser';
import ServerlessHttp from 'serverless-http';
const app = express();

const port = 8888;
const data = [
  { name: "User1", surname: "John" },
  { name: "User1", surname: "Doe" },
];
app.use('/static', express.static('public'));
app.use(bodyParser.json());

app.all('/edit', (req, res) => {
    res.json('all request');
});

app.get('/edit', (req, res) => {
    res.json('get request');
});

app.post('/edit', (req, res) => {
    res.json('post request');
});

app.put('/edit', (req, res) => {
    res.json('put request');
});

/* app.post('/addNewUser', (req, res) => {
    data.push(req.body);
    res.send('Successfully added');
}); */

/* app.listen(port, () => {
    console.log('App is running on port', port);
}); */

export const handler =  ServerlessHttp(app);