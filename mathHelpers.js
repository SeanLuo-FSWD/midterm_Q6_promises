let squareRoot = (num) => {
  return Math.sqrt(num);
};

let square = (num) => {
  return num * num;
};

let distance = (x1, y1, x2, y2) => {
  let dist = squareRoot(square(x2 - x1) + square(y2 - y1));
  console.log(
    `The distance between your two points: (${x1}, ${y1}), (${x2},${y2}) is ${dist}`
  );
};

module.exports = { distance };
