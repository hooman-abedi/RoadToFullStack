// //Part 4 — Closures
// // This is where it gets powerful. A closure happens when an inner function remembers the variables from its outer scope even after the outer function has finished running.
// let count = 0;
// const increment = () => {
//     count++;
//     console.log(count);
// }
// increment() // 1
// increment() // 2
// count = 999 // ⚠️ anything in the file can corrupt the counter
// increment() // 1000 — broken
//
//
// const makeCounter = () => {
//     let countt = 0  // private — lives inside makeCounter
//
//     return () => { // inner function returned
//         countt++    // still has access to count
//         console.log(countt)
//     }
// }
//
// const counter = makeCounter()
// // makeCounter has finished running
// // but count is still alive because the inner function holds a reference to it
//
// counter() // 1
// counter() // 2
// counter() // 3
//
// // count is completely inaccessible from outside
// // count = 999 // ❌ ReferenceError — count doesn't exist in this scope
//
//
// const makeMultiplier = (multiplier) => {
//     return number => number * multiplier
// }
// const double = makeMultiplier(2)
// const triple = makeMultiplier(3)
// const tenX = makeMultiplier(10)
//
// console.log(double(5))  // 10
// console.log(triple(5))  // 15
// console.log(tenX(5))    // 50
//
//
// const makeDiscountCalculator = (discountPercent) => {
//     return (originalPrice) => {
//         const discount = originalPrice *(discountPercent/100)
//         const finalPrice = originalPrice - discount
//         return `$${finalPrice.toFixed(2)}`
//     }
// }
// const tenPercentOff = makeDiscountCalculator(10)
// const fiftyPercentOff = makeDiscountCalculator(50)
// const memberDiscount = makeDiscountCalculator(25)
// console.log(tenPercentOff(100))    // "$90.00"
// console.log(fiftyPercentOff(100))  // "$50.00"
// console.log(memberDiscount(80))    // "$60.00"
//
//
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i) // prints 3, 3, 3 — not 0, 1, 2
//     }, 1000)
// }
//
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i) // prints 0, 1, 2
//     }, 1000)
// }
//
// console.log(name) // undefined — not an error, but not the value either
// var name = "Ali"
// console.log(name) // "Ali"

//var name was hoisted to the top but its value "Ali" was not. This is one of many reasons var causes confusing bugs.

//Exercise 1 — Scope chain
// Without running it first, predict exactly what this logs and why. Then run it and check:
const environment = "production"

const outer = () => {
    const role = "admin"

    const inner = () => {
        const action = "delete"
        console.log(environment) //prints production
        console.log(role) //prints admin
        console.log(action) //prints delete
    }

    inner()
    // console.log(action) //prints error
}

outer()

console.log(environment) //prints production
// console.log(role) //prints error
// console.log(action) //prints error


// Exercise 2 — Building a closure
// Write a function called makeGreeter that takes a language parameter and returns a function.
// The returned function takes a name and logs a greeting in that language. Support English, French, and Spanish:

const makeGreeter = (language) => {
    return (name) => {
        if (language === "english") {
            console.log(`Hello, ${name}`);
        }
        else if (language === "french"){
            console.log(`Bonjour, ${name}!`)
        }
        else if (language === "spanish"){
            console.log(`¡Hola, ${name}!`)
        }
    }


}

const greetEN = makeGreeter("english")
const greetFR = makeGreeter("french")
const greetES = makeGreeter("spanish")


greetEN("Ali")    // "Hello, Ali!"
greetFR("Sara")   // "Bonjour, Sara!"
greetES("Carlos") // "¡Hola, Carlos!"

//Exercise 3 — Factory function
// Write a function called makeTaxCalculator that takes a taxRate as a parameter and returns a function.
// The returned function takes a price and returns the total price including tax, formatted to 2 decimal places:

const makeTaxCalculator = (taxRate) => {
    return (price) => {
        const taxAmount = (price * taxRate) / 100
        const finale = price + taxAmount
        return `$${finale.toFixed(2)}`
    }
}

const canadianTax = makeTaxCalculator(13)
const americanTax = makeTaxCalculator(8)

console.log(canadianTax(100))  // "113.00"
console.log(canadianTax(79))   // "89.27"
console.log(americanTax(100))  // "108.00"

//Exercise 4 — Private state with closures
// Write a function called makeWallet that takes an initial balance. It should return an object with three methods:
//
// deposit(amount) — adds to balance, logs new balance
// withdraw(amount) — subtracts from balance, but only if funds are sufficient. If not, log "Insufficient funds"
// getBalance() — logs the current balance
//
// The balance variable must be completely private — not accessible from outside:
const makeWallet = (balance)=>{

        const deposit = (amount)=>{
            balance += amount
            console.log(`Balance: $${balance}`)
        }
        const withdraw = (amount)=>{
            if (amount > balance){
                console.log(`insufficient funds`)
            }
            else{
                balance -= amount
                console.log(`Balance: $${balance}`)}
        }
        const getBalance = () =>{
            console.log(`Balance: $${balance}`)
        }
        return {deposit, withdraw, getBalance}

}

const wallet = makeWallet(100)


wallet.deposit(50)      // "Balance: $150"
wallet.withdraw(30)     // "Balance: $120"
wallet.withdraw(200)    // "Insufficient funds"
wallet.getBalance()     // "Balance: $120"
console.log(wallet.balance) // undefined — it's private


for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 100)
}