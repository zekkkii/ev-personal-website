// you  must install npm deendencies, they are not downloaded, i just seted up the server

const express = require("express")
const ejs = require("ejs")

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));



//write the code below here

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/english", (req, res) => {
    res.render("english")
})


app.listen(process.env.PORT || 3000, () => {
    console.log("server on port 3000")
})