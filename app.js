const { error } = require("console");
const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./content/first.txt")
  .then((content) => console.log(content))
  .catch((error) => console.log(error));
