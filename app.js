const express = require('express');

const app = express();

const port = process.env.PORT || 7000;
const getRoute = require('./routes/mainget')

app.listen(port, () => {
    console.log("Merry christmas mr lawrance");
});


app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/quotes', getRoute);