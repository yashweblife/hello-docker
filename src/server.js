let express = require("express")
let path = require("path")
let fs = require("fs")
let bodyParser = require("body-parser")
let mongo = require("mongodb").MongoClient;

let app = express();

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})


app.listen(3000, ()=>{
   console.log("Running on port:", 3000) 
})