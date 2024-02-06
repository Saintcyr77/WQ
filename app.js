const express = require('express');

const app = express();

const port = process.env.PORT || 7000;
const getRoute = require('./routes/mainget')

app.listen(port, () => {
    console.log("Merry christmas mr lawrance");
});


app.use(express.json());

app.use('/quotes', getRoute);