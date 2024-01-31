#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};

console.log(myObject);

// Adding a new function incr to myObject
myObject.incr = function () {
  this.value++;
};

myObject.incr(); // Increment the value
console.log(myObject);

myObject.incr(); // Increment the value again
console.log(myObject);

myObject.incr(); // Increment the value once more
console.log(myObject);
