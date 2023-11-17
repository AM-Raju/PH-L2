const fs = require("fs");

// reading text asynchronously.

fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading text");
  }
  console.log(data);

  // writing file asynchronously

  fs.writeFile("./text/read2.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error writing data");
    }
  });
});

console.log("Testing async behavior");
