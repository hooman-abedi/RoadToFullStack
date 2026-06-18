// const add = (...numbers)=>{
//     console.log(numbers);
//     let tolal = 0;
//     for (const n of numbers){
//         tolal += n;
//     }
//     return tolal;
//
// }
// console.log(add(1,2,3,5))
//
// const registerCourse = (instructor, price, ...students) => {
//     console.log(`Instructor: ${instructor}`)
//     console.log(`Price: $${price}`)
//     console.log(`Students enrolled: ${students.length}`)
//     console.log(`Student list: ${students.join(", ")}`)
// }
// registerCourse("Ali", 99, "Hooman", "Kasra","Tara")
//
//
// // const fruits = ["apple", "banana", "orange"]
// // console.log(fruits);
// // console.log(...fruits);
//
//
//
// const vegetables = ["carrot", "broccoli"]
// const fruits = ["apple", "mango"]
// const grains = ["rice", "oats"]
// const allFoods = [...vegetables, ...fruits, ...grains]
// console.log(allFoods)
// const withExtras = ["spinach", ...vegetables, "banana", ...fruits]
// console.log(withExtras)
//
// const original = [1, 2, 3]
//
// // ❌ This does NOT copy — both variables point to the same array
// const notACopy = original
// notACopy.push(4)
// console.log(original) // [1, 2, 3, 4] — original was mutated
//
// const nums = [3, 1, 4, 1, 5, 9]
//
// // Math.max expects individual numbers, not an array
// Math.max(3, 1, 4, 1, 5, 9) // ✅ 9
// Math.max(nums)              // ❌ NaN — it received an array, not numbers
//
// // Spread unpacks the array into individual arguments
// Math.max(...nums)           // ✅ 9
// // ✅ Spread creates a new independent copy
// const realCopy = [...original]
// realCopy.push(99)
// console.log(original) // [1, 2, 3] — untouched
// console.log(realCopy) // [1, 2, 3, 99]
//
//
// const baseUser = {
//     role: "learner",
//     isActive: true,
//     createdAt: "2026-01-01"
// }
//
// // Copy an object
// const copiedUser = { ...baseUser }
//
// // Add new properties
// const adminUser = { ...baseUser, role: "admin", permissions: ["read", "write"] }
// console.log(adminUser)
// // { role: "admin", isActive: true, createdAt: "2026-01-01", permissions: [...] }
//
// // Notice role was "learner" in baseUser but "admin" in adminUser
// // When the same key appears twice, the LAST one wins
//
//
// const defaults = { theme: "light", fontSize: 14, language: "en" }
// const userPrefs = { fontSize: 18, language: "fr" }
//
// // User preferences override defaults
// const finalSettings = { ...defaults, ...userPrefs }
// console.log(finalSettings)
// // { theme: "light", fontSize: 18, language: "fr" }
//
// // Reversed — defaults would override user preferences (wrong)
// const wrongOrder = { ...userPrefs, ...defaults }
// console.log(wrongOrder)
// // { fontSize: 14, language: "en", theme: "light" } — user choices lost
//
//
// const packageData = {
//     clientName : "Ali",
//     service : "HIIT Training",
//     amount : 120
// }
// const createInvoicee = () =>({
//     clientName: packageData.clientName,
//     service : packageData.service,
//     amount : packageData.amount,
// })
// console.log(createInvoicee({ ...packageData }))
// console.log(createInvoicee(packageData))
//
//
//Exercise 1 — Rest parameters
// Write a function called summarizeOrder that
// takes a clientName as the first argument and then any number of purchased items after that. It should log:
//Client: Ali
// Items purchased: 3
// Items: Yoga Mat, Resistance Bands, Jump Rope


const summarizeOrder = (clinetName, itemPurchaesd, ...items)=>{

    console.log(`client name: ${clinetName}`)
    console.log(`itemPurchaes: ${itemPurchaesd}`)
    console.log(`items: ${items}`)
}
summarizeOrder("ali", 3, "yoga", "Resistance Bands", "Jump Rope")

//Exercise 2 — Spread in function calls
// You have this array of exam scores, and you need to find the highest and lowest without a loop:
const examScores = [78, 92, 55, 88, 73, 99, 61]
//Use Math.max and Math.min with spread to find the highest and lowest score. Log both.

const maxScore = Math.max(...examScores)
console.log(maxScore)
const lowScore = Math.min(...examScores)
console.log(lowScore)


//Exercise 3 — Combining and copying arrays
const morningClasses = ["Yoga", "Pilates", "Meditation"]
const eveningClasses = ["HIIT", "Boxing", "Cycling"]
//Do three things:
//
// Create a fullSchedule array combining both with a "Lunch Break" string in between
// Create a copy of morningClasses and add "Stretching" to the end of the copy without affecting the original
// Log both the copy and the original to prove the original wasn't changed
const fullSchedule = [...morningClasses, ...eveningClasses]
morningClassesCopy = [...morningClasses, "Stretching"]
console.log(fullSchedule)
console.log(morningClasses)
console.log(morningClassesCopy)


// Exercise 4 — Merging objects with spread
const defaultConfig = {
    theme: "light",
    language: "en",
    notifications: true,
    fontSize: 14
}

const userConfig = {
    theme: "dark",
    fontSize: 18
}
//Create a finalConfig object where user preferences override defaults.
// Log the result and make sure language and notifications are still present from defaults.
const finalConfig = {...defaultConfig, ...userConfig}
console.log(finalConfig)

//Exercise 5 — Combining rest and spread together
// Write a function called mergeAndSummarize that:
//
// Takes a label string as the first parameter
// Takes any number of arrays after that using rest
// Merges all those arrays into one using spread
// Logs the label and the merged array and its total length
// mergeAndSummarize(
//     "All Students",
//     ["Ali", "Sara"],
//     ["James", "Mia"],
//     ["Carlos", "Luna", "Priya"]
// )
// Label: All Students
// Members: Ali, Sara, James, Mia, Carlos, Luna, Priya
// Total: 7
const mergeAndSummarize = (label, ...arrays) => {
    const merged = [].concat(...arrays) // flattens array of arrays into one array
    // alternative: const merged = arrays.flat()

    console.log(`Label: ${label}`)
    console.log(`Members: ${merged.join(", ")}`)
    console.log(`Total: ${merged.length}`)
}

mergeAndSummarize(
    "All Students",
    ["Ali", "Sara"],
    ["James", "Mia"],
    ["Carlos", "Luna", "Priya"]
)
// Label: All Students
// Members: Ali, Sara, James, Mia, Carlos, Luna, Priya
// Total: 7