const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response)=>{
    // base URL
    if(request.url === '/') {
        let filepath = path.join(__dirname, 'public', 'home.html')
        fs.readFile(filepath, 'utf8', (err, data) =>{
            response.writeHead(200, {'Content-Type' : 'text/html'})
            response.end(data)
        })
    }

    // /home URL
    if(request.url === '/home') {
        let filepath = path.join(__dirname, 'public', 'home.html')
        fs.readFile(filepath, 'utf8', (err, data) =>{
            response.writeHead(200, {'Content-Type' : 'text/html'})
            response.end(data)
        })
    }

    // /about URL
    if(request.url === '/about') {
        let filepath = path.join(__dirname, 'public', 'about.html')
        fs.readFile(filepath, 'utf8', (err, data) =>{
            response.writeHead(200, {'Content-Type' : 'text/html'})
            response.end(data)
        })
    }

    // /contact URL
    if(request.url === '/contact') {
        let filepath = path.join(__dirname, 'public', 'contact.html')
        fs.readFile(filepath, 'utf8', (err, data) =>{
            response.writeHead(200, {'Content-Type' : 'text/html'})
            response.end(data)
        })
    }
});

const port = 4000

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

