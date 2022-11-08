let port = 9000;
let express = require("express");

app = express();

app.get("/", function(request, response) {
  response.send("Hello there!!!");
});

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
