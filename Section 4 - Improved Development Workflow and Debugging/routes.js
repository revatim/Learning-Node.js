const http = require('http');
const fs = require('fs');

const requestHandler = (req,res) => {
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
}

/* Export the request Handler function */
exports.handler = requestHandler;
