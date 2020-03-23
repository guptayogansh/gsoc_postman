// Loading our dependencies
let express = require("express");
let jwt = require("jsonwebtoken");
let app = express();
// HomePage route that displays a Welcome message
// can be accessed without token
app.get("/", function(req, res) {
  res.send("Welcome to JWT Basic test");
});
// Registering the route to get a new token
// In a real world scenario, the user credentials will be authenticated
app.get("/token", function(req, res) {
  var token = jwt.sign({ username: "ado" }, "supersecret", { expiresIn: 120 });
  res.send(token);
});
// Registering a route that requires a valid token to view data
app.get("/api", function(req, res) {
  var token = req.query.token;
  jwt.verify(token, "supersecret", function(err, decoded) {
    if (!err) {
      var secrets = {
        organization: "PostMan",
        proposal: "New JWT authetication scheme"
      };
      res.json(secrets);
    } else {
      res.send(err);
    }
  });
});
// Launching the app on port 3000
app.listen("3000");
