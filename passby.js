// premitive types are passed by value
let num1 = 5;
let num2 = 7;

function multiply(a, b) {
  a = 27;
  const result = a * b;
  return result;
}
console.log(num1);
multiply(num1, num2);
console.log(num1);

// object and array are passed by reference
let student1 = {name: 'jalil', partner: 'khalil'};
let student2 = {name: 'molil', partner: 'khalil'};

function playGame(group1, group2) {
  group1.name = 'ononto';
  group2.partner = 'tasnim';
}

console.log(student1, student2);
playGame(student1, student2);
console.log(student1, student2);