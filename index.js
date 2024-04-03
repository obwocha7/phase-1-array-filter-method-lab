// Code your solution here
// `findMatching`- This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers. The function should be
//   case insensitive.
const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function findMatching(arr, string) {
  const driver = [];
  for (let i of arr) {
    if (i.toLowerCase() === string.toLowerCase()) {
      driver.push(i);
    }
  }
  return driver;
}

function fuzzyMatch(arr, string) {
  const driver = [];
  for (let i of arr) {
    if (i.toLowerCase()[0] === string.toLowerCase()[0]) {
      driver.push(i);
    }
  }
  return driver;
}

function matchName(arr, string) {
  const driver = [];
  for (let i of arr) {
    if (i.name.toLowerCase() === string.toLowerCase()) {
      driver.push(i);
    }
  }
  return driver;
}

matchName(drivers, "bobby");
