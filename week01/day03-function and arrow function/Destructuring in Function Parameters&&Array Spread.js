// const packages = [
//     { title: "Yoga Basics", price: 49, category: "fitness" },
//     { title: "Learn Python", price: 99, category: "coding" },
//     { title: "Spanish A1", price: 79, category: "language" },
//     { title: "HIIT Training", price: 59, category: "fitness" }
// ]
// const displayPackages = packages.map(pkg => {
//     console.log(pkg.title);
//     console.log(pkg.price);
// })
//
//
// // destructing is used to pull out the neccessary information info from a function
// // const product = {
// //     n : "shoes",
// //     b: "nike",
// //     p: 22
// // }
// // const {n : name , b: brand} = product
// // // console.log(n)
// // console.log(brand)
//
// // const settings = {
// //     theme: "dark",
// //     language: "en"
// // }
//
// // const { theme, language, fontSize = 16, notifications = true } = settings
// // // making a default to 16 and true
// // console.log(theme)         // "dark"
// // console.log(language)      // "en"
// // console.log(fontSize)      // 16 — wasn't in object, used default
// // console.log(notifications) // true — wasn't in object, used default
//
// // const settings = {
// //     fontSize: 0
// // }
// //
// // const { fontSize = 16 } = settings
//
// // console.log(fontSize) // 0 — not undefined, so default is ignored
//
// // const config = {
// //     bg: "white"
// // }
// //
// // const { bg: backgroundColor = "gray" } = config
// //
// // console.log(backgroundColor) // "white" — existed, used the value
// // const config = {}
// //
// // const { bg: backgroundColor = "gray" } = config
// //
// // console.log(backgroundColor) // "gray" — didn't exist, used default
//
//
// // Nested Object Destructing
// // const order = {
// //     id: 1042,
// //     total: 149.99,
// //     customer: {
// //         name: "Sara",
// //         email: "sara@gmail.com",
// //         address: {
// //             city: "Vancouver",
// //             country: "Canada"
// //         }
// //     }
// // }
// // const {
// //     id,
// //     total,
// //     customer: {
// //         name,
// //         email,
// //         address: {
// //             city,
// //             country
// //         }
// //     }
// // } = order
// // console.log(id)      // 1042
// // console.log(total)   // 149.99
// // console.log(name)    // "Sara"
// // console.log(email)   // "sara@gmail.com"
// // console.log(city)    // "Vancouver"
// // console.log(country) // "Canada"
// //
// // const colors = ["red", "green", "blue"]
// //
// // const [first, second, third] = colors
// //
// // console.log(first)  // "red"
// // console.log(second) // "green"
// // console.log(third)  // "blue"
//
// // const scores = [98, 74, 85, 91, 60]
// //
// // const [first, , third, , fifth] = scores
// //
// // console.log(first) // 98
// // console.log(third) // 85
// // console.log(fifth) // 60
// //
// const point = [10]
//
// const [x = 0, y = 0, z = 0] = point
//
// console.log(x) // 10 — existed
// console.log(y) // 0  — didn't exist, used default
// console.log(z) // 0  — didn't exist, used default
// const numbers = [1, 2, 3, 4, 5]
//
// const [first, second, ...rest] = numbers
//
// console.log(first)  // 1
// console.log(second) // 2
// console.log(rest)   // [3, 4, 5]
//
// const numberss = [1, 2, 3, 4, 5]
// numberss[1] = 6
// console.log(numberss[1])
//
// // const course = {
// //     title: "Advanced Yoga",
// //     instructor: "Sara",
// //     price: 79,
// //     duration: "6 weeks"
// // }
// //
// // const displayCourse = (course) => {
// //     const title = course.title
// //     const instructor = course.instructor
// //     const price = course.price
// //     console.log(`${title} by ${instructor} — $${price}`)
// // }
//
// // displayCourse(course)
// // "Advanced Yoga by Sara — $79"
//
// // const course = {
// //     title: "Advanced Yoga",
// //     instructor: "Sara",
// //     price: 79,
// //     duration: "6 weeks"
// // }
// //
// // const displayCourse = ({ title, instructor, price }) => {
// //     console.log(`${title} by ${instructor} — $${price}`)
// // }
// //
// // displayCourse(course)
// // // "Advanced Yoga by Sara — $79"
//
// const courses = {
//     title: "Advanced Yoga",
//     instructor: "Sara"
// }
//
// const displayCourse = ({ title, instructor, price = 0, category = "general" }) => {
//     console.log(`${title} by ${instructor}`)
//     console.log(`Price: $${price}`)
//     console.log(`Category: ${category}`)
// }
//
// displayCourse(courses)
// // "Advanced Yoga by Sara"
// // "Price: $0"
// // "Category: general"
//
// const students = [
//     {
//         name: "hOOman",
//         grade: 100
//     },{ name: "Sara", grade: 95 },
//     { name: "James", grade: 72 }
// ]
// for (const {name, grade} of students) {
//     console.log(`${name}'s grade: ${grade}`)
// }
// Destructure username, email, age, isPremium,
// and also a property called bio that doesn't exist — give it a default value of "No bio provided". Log all five values.
const userProfile = {
    username: "ali_dev",
    email: "ali@gmail.com",
    age: 27,
    isPremium: true
}
const {username, email, age, isPremium, bio= "not provided"} = userProfile
console.log(username)
console.log(email)
console.log(isPremium)
console.log(age)
console.log(bio)
//In one destructuring statement, extract: orderId, status, name (from buyer), email (from buyer),
// city and country (from delivery). Log them all.
const order = {
    orderId: 5521,
    status: "shipped",
    buyer: {
        name: "Sara",
        email: "sara@example.com"
    },
    delivery: {
        city: "Montreal",
        country: "Canada",
        postalCode: "H2X 1Y4"
    }
}
const {
    orderId, status, buyer:{name, email},delivery:{city,country,postalCode}
} = order
console.log(orderId);
console.log(status);
console.log(name);
console.log(email);
console.log(city);
console.log(country);

const leaderboard = ["Ali", "Sara", "James", "Mia", "Carlos"]
//Destructure so that:
//
// champion = "Ali"
// runnerUp = "Sara"
// others = ["James", "Mia", "Carlos"]
//
// Log all three.

const [champion, runnerUp,...rest] = leaderboard
console.log(champion)
console.log(runnerUp)
console.log(rest)
// Write a function called createInvoice that takes an object with these properties:
// clientName, service, amount, taxRate (default 13). The function should log:Invoice for: Ali
// Service: Personal Training Package
// Subtotal: $200
// Tax (13%): $26
// Total: $226
const createInvoice = ({ clientName, service, amount, taxRate = 13 }) => {
    const taxAmount = (amount * taxRate) / 100
    const total = amount + taxAmount

    console.log(`Invoice for: ${clientName}`)
    console.log(`Service: ${service}`)
    console.log(`Subtotal: $${amount}`)
    console.log(`Tax (${taxRate}%): $${taxAmount}`)
    console.log(`Total: $${total}`)
}

// Call 1 — with a custom taxRate
createInvoice({
    clientName: "Ali",
    service: "Personal Training Package",
    amount: 200,
    taxRate: 15
})

// Call 2 — without taxRate, should use default of 13
createInvoice({
    clientName: "Sara",
    service: "Yoga Basics",
    amount: 79
})

const inventory = [
    { item: "Resistance Bands", quantity: 50, price: 15 },
    { item: "Yoga Mat", quantity: 30, price: 25 },
    { item: "Dumbbells", quantity: 20, price: 45 },
    { item: "Jump Rope", quantity: 100, price: 10 }
]
// Loop through the inventory and log each item like this:
// Resistance Bands — qty: 50 — total value: $750
// Yoga Mat — qty: 30 — total value: $750
// Dumbbells — qty: 20 — total value: $900
// Jump Rope — qty: 100 — total value: $1000
for (const {item , quantity, price} of inventory) {
    const totalValue = quantity * price
    console.log(`${item} - qty : ${quantity} - total value: $${totalValue}`);
}
