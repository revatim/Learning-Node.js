const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
/* To serve static files : read access */
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes);
/*
app.use('/add-product', (req, res, next) => {
//    res.send('<h3>Hello from Express ! You are in add-product page</h3> <a href = "/"> Back to Home Page </a>');
    htmlString = '<html <title> Add Product </title> <body>';
    htmlString += '<form action="/product" method="POST"> <input type="text" name="title"> <button type="submit"> Add </button> </form>';
    htmlString += '</body> </html>'
    res.send(htmlString);
});

app.post('/product', (req, res, next) => {
    const body = req.body;
    console.log(body.title);
    res.redirect('/');
});
*/
app.use(shopRoutes);
/*
app.use('/', (req, res, next) => {
    res.send('<h3> Hello from Express !</h3><a href = "/add-product"> Add Product </a>')
});
*/
app.use((req,res,next) => {
    res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
})
app.listen(3000);


/*
const express = require('express');

const app = express();

app.use( (req, res, next) => {
   console.log("Inside the middleware 1 using app.use((req, res, next) => { ... })");
    next(); // Go to next middleware else it will keep reloading or you can simply send response back
});
app.use( (req, res, next) => {
   console.log("Inside the middleware 2 using app.use((req, res, next) => { ... })");
    res.send('<h3> Hello from Section 5 </h3>');
});

app.listen(3000);
*/