const express = require("express");
const bodyParser = require("body-parser");
let items=["Exercise"];
let workitems=[];
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req, res){
  let today=new Date();
  let options={
      weekday:"long",
      day:"numeric",
      month:"long"
  };
  let day=today.toLocaleDateString("en-US",options)
 res.render("lists",{listTitle:day,newlistitems:items});
});
app.post("/",function(req,res){
    let item=req.body.newitem;
    if(req.body.lists==="Work"){
      workitems.push(item);
      res.redirect("/work");
    }
    else{
      items.push(item);
      res.redirect("/");

    }
    
    console.log(item);
    
});
app.get("/work",function(req,res){
  res.render("lists",{listTitle:"Work List",newlistitems:workitems})
});
app.post("/work",function(req,res){

})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
