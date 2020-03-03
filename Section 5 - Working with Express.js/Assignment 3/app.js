const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

app = express();
const routes = require('./routes/time');
const updateRoute = require('./routes/update');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/ajax", updateRoute);
app.use(routes);

app.use((req,res,next) => {
    res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);