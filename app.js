var express = require ("express");
var bodyParser = require ("body-parser");
var app = express();

app.use(express.static("public"));

//instead of using res.render("something.ejs") one can just say 
// app.set("view engine", "ejs"); this will work for all the rendering files
// res.render("something");


app.get("/", function(req, res){
	res.render("home.ejs");
});


app.get("/posts", function(req, res) {

	var posts = [

			{title: "Who no like better thinh?", author: "Lyon"},
			{title: "My destiny is in my hands", author: "Mike"},
			{title: "One day we will all die", author: "Temi"},
			{title: "Life is very short", author: "Beji"}
	];

	res.render("posts.ejs", {posting: posts});
});

app.get("/fallinlove/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love.ejs", {thingVar: thing});
});


app.listen(process.env.PORT || 3000, function (){
	console.log("App statrts on port 3000");
});