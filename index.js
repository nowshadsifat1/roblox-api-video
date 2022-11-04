const rbx = require('noblox.js')

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var dotenv = require('dotenv').config();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes.js")(app);
var cookie = ""

async function login() {
    const currentUser = await rbx.setCookie(cookie)

    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
}


const port = 3000;

app.listen(process.env.PORT || port, () => console.log('listening at' + port));

login()