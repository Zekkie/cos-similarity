const mongo = require("mongodb").MongoClient;
const express = require("express");

const {fork} = require("child_process");

let matrix = [];

const computerManager = fork("./manager.js");

const fs = require("fs");

const app = express();



const url = "mongodb://localhost:27017";

function tokenize(input) {
	const i = input.toLowerCase();
	return i.split(" ");
}



computerManager.on("message", m => {
		matrix = m;
})


mongo.connect(url,(err,client) => {
	const db = client.db("gotTweets");
	const collection = db.collection("tweets");
	collection.find({}).toArray((e,items) => {
		if(e) throw e;
		
		items.splice(200,items.length-200);

		computerManager.send(items);
		computerManager.working = true;

	})
});



app.get("/", (req,res) => {
	res.sendFile(__dirname+"/static/index.html")
})


app.get("/matrix",(req,res) => {
	res.send(matrix)
})


app.listen(9000);