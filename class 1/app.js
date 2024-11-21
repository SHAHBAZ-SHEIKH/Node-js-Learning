const myname = "Shahbaz Ahmed"
console.log(myname)
const fs = require("fs")
const output = fs.readFileSync("./input.txt", "utf-8")
console.log(output)


const writeTheFile = "mai node js parhny ja raha ho"

const writeFile = fs.writeFileSync('./output.txt', writeTheFile)
console.log("file mai written add hogaya hai")

const http = require("http")
const { URLSearchParams } = require("url")
const server = http.createServer((req, res) => {
    console.log(req.url, req.method,)
    if (req.url === '/') {
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Enter Your Details</h1>')
        res.write('<form action="/create-user" method="POST">')
        res.write('<label for="username">Username</label>')
        res.write('<input type="text" name="username" id="username"><br>')
        res.write('<label for="password">Password</label>')
        res.write('<input type="password" name="password" id="password"><br>')
        res.write('<label for="gender">Gender</label>')
        res.write('<input type="radio" name="gender" id="male" value="male">')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" name="gender" id="female" value="female">')
        res.write('<label for="female">Female</label><br>')
        res.write('<input type="submit" value="Submit">Submit</input>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    else if (req.url === '/create-user' && req.method === 'POST') {
        const body = []
        req.on("data", (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const params = new URLSearchParams(parsedBody)
            //const objectBody = {}
            // for (const [key, value] of params.entries()) {
            //     objectBody[key] = value
            // }
            const objectBody = Object.fromEntries(params)
            fs.writeFileSync('user.txt', JSON.stringify(objectBody))

            console.log(objectBody)
        })
        
        res.setHeader('Location', '/')
        res.statusCode = 302;
        return res.end()


    }

    else {
        res.setHeader("Content-Type", "text/html")
        res.write('<html><body><h1>Your form has been submitted</h1></body></html>')
        res.end()
    }
})
const PORT = 3003
server.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})





