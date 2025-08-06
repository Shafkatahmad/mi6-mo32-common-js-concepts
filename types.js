// strongly typed language. 
// int a = 5;
// string a = 'john steve';

// Javascript is a dynamic type language

// premitive type
const a = 5;
const b = 'john steve';
const d = true;


// non-premitive type
const ages = [45, 65, 48];
const student = {id: 23, class: 7};
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
q.job = 'fornt-end developer';
console.log(p, q);