/* Assignment Instructions 
1. Create npm project and Install express.js 
Part 1
2. Create and express.js app which funnels the requests through 2 middle ware functions that log something to the console and return one response
Part 2
3. Handle requests to "/" and "/users" such that each request only has one handler/ middleware that does something with it
*/

const express = require('express');

/* Part 1 of the assignment */
const app = express();

app.use('/', (req, res, next) => {
    console.log("This is the first middleware for first part of the assignment and it will always run");
    next();
});

app.use('/', (req, res, next) => {
    console.log("This is the second middleware and will return a response");
    res.send('<h3> Hello from Express !</h3>');
});
app.listen(3000);

/* Part 2 of the assignment */
const app2 = express();

app2.use('/users', (req, res, next) => {
    const userlist = ['User1', 'User2', 'User3'];
    
    htmlString = '<html><title> Welcome </title> <body> <h3> Welcome to my assignment </h3> <a href = "/" > Back to Home Page </a> <br> <br> <ul>'
    userlist.forEach( (user) => {
        if(user){
            htmlString += '<li>' + user + '</li>' ;
        }

    });
    htmlString += '</ul></body></html>';
    res.send(htmlString);
});

app2.use('/', (req, res, next) => {
    res.send('<h3> Hello from Express !</h3> <a href="/users"> Go to userlist </a>');
});
app2.listen(3001);
