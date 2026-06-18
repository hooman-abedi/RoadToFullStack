const packageDatabase = {
    id: 101,
    title: "8-Week HIIT Program",
    price: 149,
    category: "fitness",
    enrolled: 234,
    trainer: "Ali Hassan"
}
//Write a function called fetchPackage that:
//
// Takes a packageId and a callback
// Simulates a 1 second server delay with setTimeout
// If packageId is 101, calls callback(null, packageDatabase)
// If packageId is anything else, calls callback(new Error("Package not found"), null)
//
// Then call it twice:
//
// Once with 101 — log the package title, price, and trainer name
// Once with 999 — log the error message

const fetchPackages = (packageId, callback) => {
    setTimeout(() => {
        if (packageId === 101){
            callback(null, packageDatabase)
        }
        else {
            callback(new Error(`No trainer found with ID ${packageId}`),null)
        }
    },1500)
}
fetchPackages(101,(error, packages) => {
    if (error) {
        console.log("❌ Error:", error.message)
        return
    }
    console.log(`✅ Found package: ${packages.title}`)
    console.log(`   price: ${packages.price} `)
    console.log(`   trainer: ${packages.trainer} `)

})
fetchPackages(999,(error, packages) => {
    if (error) {
        console.log("❌ Error:", error.message)
        return
    }
    console.log(`✅ Found package: ${packages.title}`)
    console.log(`   price: ${packages.price} `)
    console.log(`   trainer: ${packages.trainer} `)

})
//Exercise 2 — Spot the bug
// This code has a bug that would crash a real app. Find it, explain what would happen, and fix it:
const userData = {
    id: 1,
    name: "Sara",
    email: "sara@example.com"
}

const fetchUser = (userId, callback) => {
    setTimeout(() => {
        if (userId === 1) {
            callback(null, userData)
        } else {
            callback(new Error("User not found"), null)
        }
    }, 1000)
}

fetchUser(99, (error, user) => {
    console.log(`Welcome back, ${user.name}`)

    if (error) {
        console.log("Error:", error.message)
        //it doesn't return anything and it needs a return after the if statement
        //also we never reach the if statemenet and the if statement should come first
    }
})