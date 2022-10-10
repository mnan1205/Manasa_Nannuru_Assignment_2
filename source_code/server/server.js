const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.get('/add', (req, res) => {
    console.log(req.body);
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a + b;
    console.log(sum);
    res.json({ "sum": sum });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))