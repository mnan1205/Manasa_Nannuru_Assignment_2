const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/add', (req, res) => {
    console.log(req.body);
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a + b;
    console.log(sum);
    res.json({ "sum": sum });
    // // res.body = sum
    // res.set("sum", sum)
    // res.jsonp(sum)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))