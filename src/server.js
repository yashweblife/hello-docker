let express = require("express")
let path = require("path")
let fs = require("fs")
let bodyParser = require("body-parser")
let mongo = require("mongodb").MongoClient;

let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})
app.get('/todolists',(req, res)=>{
    res.send({
        base:"Hello World"
    })
})

app.listen(3000, () => {
    console.log("Running on port:", 3000)
})