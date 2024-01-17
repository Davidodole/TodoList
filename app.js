const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs")
var items = ["Eat food","Buy food","Cook food"];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


const message = "please type in what you want!";



app.get("/", (req,res)=>{
    const today = new Date();

    const option = { day: "numeric", weekday: "long", month: "long", year : "numeric"}

    fullDate = today.toLocaleDateString('en',option);

    const yearDate = today.getFullYear();
    res.render("list",{ kindOfData: fullDate, addItems: items})
})
app.post("/", (req, res)=>{
    const item1 = req.body.newItem;
    items.push(item1)
    res.redirect("/")
});





app.listen(3000, () => {
    console.log("server is working perfectly");
});