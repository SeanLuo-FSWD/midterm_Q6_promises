const readlineSync = require("readline-sync");
const fs = require("fs");
const path = require("path");
const mathHelpers = require("./mathHelpers.js");

let getUserInput = () => {
  const userInput = readlineSync.question(
    "Please enter your two points as follows: x1,y1,x2,y2\n"
  );
  console.log("You entered: " + userInput);
  writeUserInputToFile(userInput)
    .then(() => readUserInputFromFile())
    .then((data) => mathHelpers.distance(...data))
    .catch((err) => console.log(err));
};

let writeUserInputToFile = (userInput) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(path.join(__dirname, "dataPoints"), { recursive: true }, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log("Saving points.txt to a folder named dataPoints...");
        fs.writeFile(
          path.join(__dirname, "dataPoints", "points.txt"),
          userInput,
          { encoding: "utf8" },
          (err) => {
            if (err) {
              reject(err);
            } else {
              console.log("Content saved");
              resolve();
            }
          }
        );
      }
    });
  });
};

let readUserInputFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "dataPoints", "points.txt"),
      { encoding: "utf8" },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          let lst = data.split(",");
          resolve(lst);
        }
      }
    );
  });
};

module.exports = { getUserInput };
