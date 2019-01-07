var express = require("epress");
var bodyParser = require("body-parser");
var cors = require("cors");


var app = express();
app.use(bodyParser.json());
app.use(cors());
app.get("/api/timestamp/:date_string", (req, res, next) => {
  var date_string = req.
});