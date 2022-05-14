const http=require('http')
const server=http.createServer((req,res) => {
    if(req.url==='/'){
        res.end('This is the homepage')
    }
    if(req.url==='/about'){
        res.end('this is the about page')
    }
    res.end(`<h1>OOPS..!</h1>
            <p>please return to homepage</p>
            <a href='/'> back home</a>
    `)
})
server.listen(5000);//for appropriate port number

