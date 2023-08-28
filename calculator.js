const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


// Diplaying HTML interface to the user when they open the app
// display content of index.html file
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const operation = req.body.operation;

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }
  
// Display Output for their required querry
  res.send(`Your Calculation is ${result}`);
});


// Another calculator request which
// Diplaying HTML interface of bmiCalculator.html file
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){

var height = parseFloat(req.body.height)/100;
var weight = parseFloat(req.body.weight);

var bmi = ( weight / (height*height));

// Display Output for their required querry
  res.send("Your BMI is " + bmi );
})


// when using this app locally, it will start on port 3000 using Node.js
// once you req node, you can access it on, localhost:3000
app.listen(2000, function(){
  console.log("Hello welcome to server 2000")
});
