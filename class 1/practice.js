const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers)

    if(req.url === '/'){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Welcome to my website</h1>')
        res.write('<a href="/">Home</a>')
        res.write('<br>')
        res.write('<a href="/men">Men</a>')
        res.write('<br>')
        res.write('<a href="/women">Women</a>')
        res.write('<br>')
        res.write('<a href="/kids">Kids</a>')
        res.write('<br>')
        res.write('<a href="/cart">Carts</a>')
        return res.end()
    }
    else if(req.url === '/men'){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Welcome to Men Section</h1>')
        res.write('<br>')
        res.write('<a href="/">Home</a>')
        res.write('<br>')
        res.write('<a href="/men">Men</a>')
        res.write('<br>')
        res.write('<a href="/women">Women</a>')
        res.write('<br>')
        res.write('<a href="/kids">Kids</a>')
        res.write('<br>')
        res.write('<a href="/cart">Carts</a>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    else if(req.url === '/women'){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Welcome to Women Section</h1>')
        res.write('<br>')
        res.write('<a href="/">Home</a>')
        res.write('<br>')
        res.write('<a href="/men">Men</a>')
        res.write('<br>')
        res.write('<a href="/women">Women</a>')
        res.write('<br>')
        res.write('<a href="/kids">Kids</a>')
        res.write('<br>')
        res.write('<a href="/cart">Carts</a>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    else if(req.url === '/kids'){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Welcome to Kids Section</h1>')
        res.write('<br>')
        res.write('<a href="/">Home</a>')
        res.write('<br>')
        res.write('<a href="/men">Men</a>')
        res.write('<br>')
        res.write('<a href="/women">Women</a>')
        res.write('<br>')
        res.write('<a href="/kids">Kids</a>')
        res.write('<br>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    else if(req.url === '/cart'){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Welcome to Cart Section</h1>')
        res.write('<br>')
        res.write('<a href="/">Home</a>')
        res.write('<br>')
        res.write('<a href="/men">Men</a>')
        res.write('<br>')
        res.write('<a href="/women">Women</a>')
        res.write('<br>')
        res.write('<a href="/kids">Kids</a>')
        res.write('<br>')
        res.write('<a href="/cart">Carts</a>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    else{
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Page Not Found</h1>')
        res.write('</body>')
        res.write('</html>')
        
        return res.end()
    }
    
})
const PORT = 3002
server.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})