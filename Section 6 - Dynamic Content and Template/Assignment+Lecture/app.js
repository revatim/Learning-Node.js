const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//app.set('view engine', 'pug'); //setup for pug

/* setup for ejs starts here */
// ejs doesnt have layouts but we can use partials (something like django)
app.set('view engine', 'ejs')
app.set('views', 'views')
/* setup for ejs ends here */


app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle : 'Page Not Found',
        path: ''
    }); //pug 
//    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
