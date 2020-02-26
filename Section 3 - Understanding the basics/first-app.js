// require - importing in node.js -- ./ local file (adds js automatically)
const http = require('http');
const fs = require('fs');
/* Basically creating a function to listen to requests */
/*
function requestListener(req, res) {
    console.log("Inside requestListener");
}
*/
/* Create server */
//http.createServer(requestListener);

const server = http.createServer( (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
         // process.exit(); /* To stop the process exit server aka*/
        res.setHeader('Content-Type', 'text/html');
        /* write data as response */
        
        htmlString = '<html> <title> My first page </title> <body> <h1> Hello to my node server </h1>';
        htmlString += '<form action="/message" method="POST"> <input type="text" name="message"> <button type="submit"> Send </button> </form>';
        htmlString += '</body> </html>';
        res.write(htmlString);

        return res.end(); /*exit out of the function */
        /* res.end() 
        This signifies the end of writing any attempt to write after this will give an error */
        /* Simpler way of doing it with express.js */
    }
    
    if (url === '/message' && method === 'POST') {
        /*  
        What I want to do here is 
        1. Get the data we sent in the form 
        2. Redirect the page back to /
        ps. Here I know what I am receiving is text
        */
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        
        return req.on('end', () => {
            /*
            writeFileSync vs writeFile 
            sync one blocks execution of next line of code till the file is written 
                    fs.writeFile('message.txt', message, (err) => {
                        this option is in writeFile !
                    });
                    
            writeFile is how you should use for basic operations unless Sync code block is absolutely necessary

            */
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log("parsedBody: ", parseBody);
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        });
        /* 
        data event will fired whenever we get a new chunk of data 
        end event iwll be fired when body is received completely
        
        console.log::
        chunk :  <Buffer 6d 65 73 73 61 67 65 3d 61>
        parsedBody:  message=a
        some symbols may be encoded 
        */
        
        
    }
    
    res.setHeader('Content-Type', 'text/html');
        
    htmlString = '<html> <title> My first page </title> <body> <h1> Hello to my node server </h1>';
    htmlString += '</body> </html>';
    res.write(htmlString);
    res.end();
    
});

// node.js will listsn for incoming requests
// port number : 80 by default
server.listen(3000);

/*
Event Loop
    Handle event callbacks (fast executing code)
    Timers: execute setTimeout, SetInterval callbacks
        Pending Callbacks: Excecute i/o related callbacks that were deferred
        (if there are too many it will just postpone what cannot be done)
    Poll (phase): Retrieve new i/o evejts and complete if possible
    Check: execite setImmediate() callbacks 
    Close Event Callbacks: execute all 'close' event callbacks 
        
Worker Pool ! Different threads 
    All the heavy lifting is done by worker pool eg fs operations
*/