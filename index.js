const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response)=>{
    if(request.url === '/') {
        // let filepath = path.join(__dirname, 'public', 'index.html')
        // fs.readFile(filepath, 'utf8', (err, data) =>{
            response.writeHead(200, {'Content-Type' : 'text/html'})
            response.end('<h1>Hello MuqsitX</h1>')
        // })
    }
});

const port = 4000

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

