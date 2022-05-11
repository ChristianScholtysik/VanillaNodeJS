const fs = require("fs");

fs.readFile("./test.html", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
