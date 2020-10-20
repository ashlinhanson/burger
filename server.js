const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import routes and give the server access to them
let routes = require("./controllers/burger_controller.js");

app.use(routes);

//start the server to begin listening to the client requests
app.listen(PORT, function(){
    console.log("Server is listening on: http://localhost:" + PORT);
});