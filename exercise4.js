import fs from "fs";

fs.writeFile("test.html", "hello", (err) => {
  if (err) throw err;
});

import fs from "fs";

fs.readFile("test.html", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
