const express= require('express');
const bodyParser= require('body-parser'); //parser is used to load data from form(HTML)
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req,res)
{
  res.sendfile(__dirname+"/index.html");
})
app.post("/", function(req,res)
{
  var num1= Number(req.body.num1);  //num1 is coming from index.htmml from form
  var num2= Number(req.body.num2);
  var result= num1+num2;
  res.send("result is "+ result);
})
app.get("/BmiCalculator", function(req,res)
{
  res.sendfile(__dirname+"/BmiCalculator.html");
})
app.post("/BmiCalculator", function(req,res)
{
  var weight= parseFloat(req.body.weight);//parsefloat to get decimal after weight (float)
  var height= parseFloat(req.body.height);
  var bmi= weight/(height*height);
  res.send("your bmi is"+ bmi);
})
app.listen(3000, function()
{
console.log("Server started on port 3000.")
});
