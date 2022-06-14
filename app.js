const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// using local css and imge files have to use app.use(express.static),providing the path of our static files.
app.use(express.static("public"))
// use bodyParser start a new project
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(res,res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req,res){
    var firstName = req.body.fName;
    var lastName =  req.body.lName;
    var email = req.body.email;
    console.log(firstName, lastName, email);
})

const port = 3000;
app.listen(port,()=>{
    console.log("Server is running on port 3000");
});
