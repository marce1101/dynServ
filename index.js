const = express = require("express");
var app = express();

const port = process.env.PORT || 3000;

app.get("/Awesome", function(req, resp){
   resp.end("you are awesome") 
});

app.get("/blablabla", function(req, resp){
   resp.end("blue") 
});




app.listen(port, function(err){
   if(err){
    console.log("something is wrong: "+err);
    return false;
   }
    console.log("PORT IS READY FOR H@X!");
});