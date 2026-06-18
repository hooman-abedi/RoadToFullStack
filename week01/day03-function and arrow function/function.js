// Classic function declaration

function greet(name){
    return `Hello, ${name}`;
}
// Arrow function — what you'll use most in modern JS and React
const greett = (name) => {
    return `Hello, ${name}`;
}
// Shorthand — when the body is just one expression, skip the braces and return
const greettt = (name) => `Hello, ${name}`;


console.log(greettt('Homan'));
console.log(greett('Ho0man'));
console.log(greet('Hooman'));


// Default parameter — used when nothing is passed in
const greettttt = (name = "stranger") => `Hello, ${name}!`

greettttt("Ali")   // "Hello, Ali!"
greettttt()       // "Hello, stranger!"

// Multiple parameters
// const add = (a, b) => a + b
// add(3, 4)  // 7
//
// // Returning an object — needs extra parentheses
// const getUser = (name, age) => ({ name, age })
// getUser("Ali", 27)  // { name: "Ali", age: 27 }
//
//
// // You wrote this
// products.filter(product => product.inStock)
//
// // That arrow function IS an argument being passed to filter
// // filter calls it on every item and keeps the ones that return true
//
// // Same thing, just more explicit
// const isInStock = (product) => product.inStock
// products.filter(isInStock) // identical result


// formatPrice(99)    // "$99.00"
// formatPrice(120.5) // "$120.50"

const changedFormat = (formatPrice) => `$${formatPrice.toFixed(2)}`
console.log(changedFormat(120.5))

const packages = [
    { title: "Yoga Basics", price: 49, category: "fitness" },
    { title: "Learn Python", price: 99, category: "coding" },
    { title: "Spanish A1", price: 79, category: "language" },
    { title: "HIIT Training", price: 59, category: "fitness" }
]
// products.filter(product => product.inStock)
filteredPackages = packages.filter(p => p.category === "fitness")
console.log(filteredPackages)
const newFormat = packages.map(pkg => `${pkg.title} — ${formatPrice(pkg.price)}`)
console.log(newFormat)