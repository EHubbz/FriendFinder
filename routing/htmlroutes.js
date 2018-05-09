
var path = require("path");

module.exports = function(app) {


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});
// Get all characters
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
};

