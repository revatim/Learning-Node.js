/*
1. Spin up a Node.js driven server on port 3000
2. Handle 2 routes "/" and "users"
    Return greeting on "/" "Hello welcome to the page !"
    Return a list of dummy users <ul <li> user1 and so on
3. Add a form with a username input to the / page and submit the post request to "/create-user" upon a button click
4. Parse the data and log it to console

What did you find most challenging and how did you overcome the challenge?
*/
  
const http = require('http')
const fs = require('fs') 

const server = http.createServer( (req, res) => {
    const url = req.url;
    const method = req.method;
    
    if (url === '/'){
        res.setHeader('Content-Type','text/html');
        htmlString = '<html><title> Welcome </title> <body> <h3> Welcome to my assignment </h3> <a href="/users">Users List</a> <br> <form method="POST" action="/create-user"> <input name="username" type="text"> <button type="submit"172 > Add </button> </form></body></html>';
        res.write(htmlString);
        return res.end()
    }
    if (url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1]

            fs.appendFile('userlist.txt', message + '::', (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); 
        });    
    }
    if (url === '/users') {
        res.setHeader('Content-Type','text/html');
        let userlist = [];
        fs.readFile('userlist.txt', 'utf8', (err, content) => {
            userlist = content.split('::');
            if(userlist.length == 1){
                userlist = ['User1', 'User2', 'User3'];
            }
            htmlString = '<html><title> Welcome </title> <body> <h3> Welcome to my assignment </h3> <a href = "/" > Back to Home Page </a> <br> <br> <ul>'
            userlist.forEach( (user) => {
                if(user){
                    htmlString += '<li>' + user + '</li>' ;
                }

            });
            htmlString += '</ul></body></html>';
            res.write(htmlString);
            return res.end()
            });
        
    }
});

server.listen(3000);