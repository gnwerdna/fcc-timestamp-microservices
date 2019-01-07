var express = require("epress");
var bodyParser = require("body-parser");
var cors = require("cors");


var app = express();
app.use(bodyParser.json());
app.use(cors());
app.get("/:date_string", (req, res, next) => {
  var date_string = req.params.date_string;
  var dateFormattingOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  if()
  res.json({unix: date_string, natural: natureDate});
});