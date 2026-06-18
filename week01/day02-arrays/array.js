const array = [1, 2, 3, 4, 5];
console.log(typeof array);
console.log(Array.isArray(array));


// 1. Literal syntax — preferred
const empty = [];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["two", 1, true, null, {name: "Hooman"}, [10,20]]
// 2. Array constructor — avoid in most cases (it's inconsistent)
const a = Array(5);
const b = Array(1,2);
// 3. Array.of — like the constructor but consistent
Array.of(5);        // [5]
Array.of(1, 2, 3);  // [1, 2, 3]
// 4. Array.from — creates from an iterable or array-like object
Array.from("abc");                          // ["a", "b", "c"]
Array.from({length: 4}); // [undefined, undefined, undefined]
Array.from({length: 5}, (_,i)=>i*2);// [0, 2, 4, 6, 8] — with mapping function
const fruits = ["apple", "banana", "cherry", "date"];
fruits[0];     // "apple"
fruits[3];     // "date"
fruits[10];    // undefined — out-of-bounds returns undefined, NO error thrown!
fruits[-1];    // undefined — negative indexes do NOT work with bracket syntax
fruits.at(-1); // "date" — the .at() method DOES support negative indexes
fruits.at(-2); // "cherry"



const arr = ["a", "b", "c"];
// Replace an existing index
arr[1] = "B";          // ["a", "B", "c"]
// Setting beyond length creates "holes" (sparse array)
arr[5] = "f";          // ["a", "B", "c", empty, empty, "f"]
arr.length;            // 6 — length jumped to fit
arr[3];                // undefined (it's a hole)

const arrr = [1, 2, 3, 4, 5];
arrr.length;
arr.length = 3;    // arr is now [1, 2, 3] — destructive truncation!
arr.length = 6;    // arr is now [1, 2, 3, empty × 3] — extended with holes

const stack = [1,2,3];
stack.push(4);// returns 4 (new length), stack is [1, 2, 3, 4]
stack.push(5,6);// can push multiple — returns 6, stack is [1, 2, 3, 4, 5, 6]
stack.pop();
console.log(stack);
stack.includes(4)
index = stack.indexOf(2)
console.log(index)

const users = [
    {name : "Ali", age : 27, active : true},
    { name: "Sara", age: 23, active: false },
    { name: "James", age: 31, active: true }
]
// map — transform every item into something new
const names = users.map(user => user.name);
// ["Ali", "Sara", "James"]

// filter — keep only items that pass the test
const activeUsers = users.filter(user => user.active === true);
// [{ name: "Ali" ... }, { name: "James" ... }]

// find — get the first item that matches
const findSara = users.find(user => user.name === "Sara")
// { name: "Sara", age: 23, active: false }

const products = [
    { name: "Shoes", price: 80, inStock: true },
    { name: "Hat", price: 25, inStock: false },
    { name: "Jacket", price: 120, inStock: true },
    { name: "Socks", price: 10, inStock: true }
]

const inStock = products.filter(products => products.inStock === true);
const productName = products.map(product => product.name);
const productHat = products.find(product => product.name === "Hat")


