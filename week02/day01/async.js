//JavaScript runs on a single thread. That means it can only do one thing at a time. So what happens when you need to fetch data from a server that takes 2 seconds to respond?
// Without async, JavaScript would freeze — nothing else could run while it waited. With async, JavaScript says "go start that task, I'll keep running other things, tell me when it's done."
console.log("1 - start")

setTimeout(() => {
    console.log("2 - this runs after 2 seconds")
}, 2000)

console.log("3 - this runs immediately")

// Output:
// 1 - start
// 3 - this runs immediately
// 2 - this runs after 2 seconds

//JavaScript didn't wait for the timer. It registered it, moved on, and came back when it was done. That's the event loop — the mechanism behind all async behavior.

//Call Stack          → where code runs, one at a time
// Web APIs / Node APIs → where async tasks live while waiting (timers, fetch, fs)
// Callback Queue      → where completed async tasks wait to re-enter the stack

console.log("A")

setTimeout(() => console.log("B"), 0) // 0ms delay — still async

console.log("C")

// Output: A, C, B
// Even with 0ms delay, B goes through Web APIs → Callback Queue
// It only runs after the stack is completely empty


//Callbacks (The Old Way)
// A callback is a function you pass to another function to be called when an async task completes. This was the original async pattern in JavaScript.

const getUserData = (userId, callback) => {
    // simulate a database call that takes 1 second
    setTimeout(()=>{
        const user = {id:userId, name: "HOOMAN", role: "trainer"}
        callback(null, user)
    },1000)

}
// Get user → then get their packages → then get reviews for each package
getUserData(1,(error,user)=>{
    if (error) {
        console.log("Something went wrong:", error)
        getPackages(user.id, (error, packages) => {
            if (error) {
                return console.log(error)
            }
            getReviews(packages[0].id, (error, reviews) => {
                if (error) return console.log(error)
                getAverageRating(reviews, (error, rating) => {
                    if (error) return console.log(error)

                    console.log(`Rating: ${rating}`)
                    // we're 4 levels deep and this is still a simple case
                })

            })
        })
    }

})
//This is called callback hell — code that keeps indenting rightward, impossible to read, maintain, or handle errors cleanly.
// Promises were invented to solve this.

// Promises
//pending   → the async operation is still running
// fulfilled → it completed successfully, value is available
// rejected  → it failed, error is available
const fetchUser = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (userId>0){
                resolve({id:userId, name:"HOOMAN"})
            }
            else {
                reject(new Error("User does not exist"))
            }
        },1000)

    })

}
fetchUser(1)
    .then(user=>{
        console.log(user.name)
        return user.id
    })
    .then(id =>{
        console.log("User ID is:", id)
    })
    .catch(error => {
        console.log("Error:", error.message)
    })
    .finally(()=>{
        console.log("Always runs — success or failure")
    })
fetchUser(1)
    .then(user => fetchPackages(user.id)) // returns another promise
    .then(packages => fetchReviews(packages[0].id)) // chains
    .then(reviews => calculateRating(reviews))
    .then(rating => console.log(`Rating: ${rating}`))
    .catch(error => console.log(error))        // one catch handles everything

//Same logic as the callback hell example — but flat, readable, and one error handler covers the entire chain.


// This simulates a database that has one trainer
const trainerDatabase ={
    id: 1,
    name: "HOOMAN",
    specialty: "Swimming",
    rating: 4.9,
    totalStudents: 888
}
// This simulates fetching that trainer from a server
// In real life, this would be a call to your database
// It takes 1.5 seconds to respond — just like a real server would
const fetchTrainer = (callback) =>{
    console.log("⏳ Contacting server for trainer data...")

    setTimeout(()=>{
        console.log("✅ Server responded!")
        callback(trainerDatabase)
    },1500)
}

console.log("🚀 App started")
fetchTrainer((trainer) => {
    console.log(`Welcome back, ${trainer.name}`)
    console.log(`Specialty: ${trainer.specialty}`)
    console.log(`Rating: ${trainer.rating} ⭐`)
    console.log(`Total students: ${trainer.totalStudents}`)
})

console.log("📱 Loading UI components...")


const packages = ["Yoga", "HIIT", "Pilates"]
packages.map(pkg => console.log(pkg))
packages.filter(pkg => console.log(pkg.length > 4))
setTimeout(()=> console.log("done"),1000)