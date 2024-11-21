const { sumRequestHandler } = require("./sum")
const requestHandler = (req, res) => {
    console.log(req.url, req.method)
    if(req.url === '/'){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Welcome To Calculator</h1>')
        res.write('<a href="/calculator">Go to Calculator</a>')
        res.write('<br>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }

    else if(req.url ==="/calculator"){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Calculator</h1>')
        res.write('<form action="/calculate" method="POST">')
        res.write("<label for='num1'>Enter First Number</label>")
        res.write('<input type="number" name="num1" id="num1"><br>')
        res.write("<label for='num2'>Enter Second Number</label>")
        res.write('<input type="number" name="num2" id="num2"><br>')
        res.write('<input type="submit" value="Submit">')
        res.write('</form>')
        res.write('<br>')
        return res.end()
        res.write('</body>')
        res.write('</html>')
    }

    else if(req.url === "/calculate" && req.method === "POST"){
        return sumRequestHandler(req, res)
        
    }

    res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>404 Page Not Found</h1>')
        res.write('<a href="/">Go to Home Page</a>')
        res.write('<br>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    
}

exports.requestHandler = requestHandler