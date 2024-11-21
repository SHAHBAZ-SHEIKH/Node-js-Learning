const sumRequestHandler = (req,res)=>{
    console.log("sum request handler",req.url)
    const body = []
    req.on("data", (chunk) => {
        body.push(chunk)
        
    })
    req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString()
        const params = new URLSearchParams(parsedBody)
        console.log(params)
        const num1 = params.get("num1")
        const num2 = params.get("num2")
        const sum = parseInt(num1) + parseInt(num2)
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>The sum of ' + num1 + ' and ' + num2 + ' is ' + sum + '</h1>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    })

}

exports.sumRequestHandler = sumRequestHandler