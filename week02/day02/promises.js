// A Promise is an object that represents the eventual result of an async operation.
// It's a placeholder for a value that doesn't exist yet but will in the future.
//A Promise is always in one of three states:
// pending    → the operation is still running (buzzer hasn't gone off)
// fulfilled  → the operation succeeded (food is ready, here's your data)
// rejected   → the operation failed (kitchen is closed, here's the error)

const trainerData = {
    id:1,
    name:"Hooman Abedi",
    specialty: "Fitness & HIIT Training",
    rating: 4.9,
    totalStudents: 847
}
// Creating a Promise
const fetchTrainer = (trainerId) =>{
    return new Promise((resolve, reject) => {
        console.log("⏳ Contacting server...")
        setTimeout(()=>{
            if (trainerId === 1){
                resolve(trainerData) // ✅ success — promise fulfilled
            }else {
                reject(new Error(`No trainer found with ID ${trainerId}`),null)
            }
        },1500)
    })
}
//Using a Promise: .then() and .catch()
//A Promise on its own does nothing visible. You need to tell it what to do when it fulfills or rejects.
console.log("🚀 App started")

// fetchTrainer(1).then((trainer)=>{
//     // this runs when the promise is fulfilled
//     // trainer = the value passed to resolve()
//     console.log("✅ Trainer loaded!")
//     console.log(`Name: ${trainer.name}`)
//     console.log(`Specialty: ${trainer.specialty}`)
//     console.log(`Rating: ${trainer.rating} ⭐`)
//     console.log(`Students: ${trainer.totalStudents}`)
// }).catch((error)=>{
//     // this runs when the promise is rejected
//     // error = the Error passed to reject()
//     console.log("❌ Failed to load trainer")
//     console.log(`Reason: ${error.message}`)
// })
// console.log("📱 UI is loading...")

//Chaining Promises
//This is the most important part.
//Each .then() can return a new Promise — and the next .then() waits for that Promise to resolve before running.
const packagesData = [
    {
        id: 101,
        trainerId: 1,
        title: "8-Week HIIT Program",
        price: 149,
        enrolled: 234
    },
    {
        id: 102,
        trainerId: 1,
        title: "Morning Yoga Flow",
        price: 79,
        enrolled: 189
    },
    {
        id: 103,
        trainerId: 1,
        title: "Strength Foundations",
        price: 199,
        enrolled: 98
    }
]
const reviewsData = [
    { id: 1, packageId: 101, student: "Sara M.", comment: "Life changing!", rating: 5 },
    { id: 2, packageId: 101, student: "James K.", comment: "Tough but worth it", rating: 5 },
    { id: 3, packageId: 101, student: "Mia R.", comment: "Lost 8kg in 8 weeks", rating: 5 }
]

const fetchPackages = (trainerId)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const trainerPackages = packagesData.filter(p => p.trainerId === trainerId)
            if (trainerPackages.length > 0){
                resolve(trainerPackages)
            }
            else {
                reject(new Error(`No packages found for trainer ID: ${trainerId}`))
            }
        },1000)
    })
}
const fetchReviews = (packageId)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const packagesReview = reviewsData.filter(r => r.packageId === packageId)
            if (packagesReview.length > 0){
                resolve(packagesReview)
            }
            else {
                reject(new Error(`No reviews found for review ID: ${packageId}`))
            }
        },800)
    })
}
console.log("🚀 Loading trainer dashboard...")

fetchTrainer(1)
    .then((trainer) => {
        console.log(`\n👤 Trainer: ${trainer.name}`)
        console.log(`   Rating: ${trainer.rating} ⭐`)
        return fetchPackages(trainer.id) // return the next promise
    })
    .then((packages) => {
        console.log(`\n📦 Packages (${packages.length} total):`)
        packages.forEach(pkg => {
            console.log(`   - ${pkg.title} — $${pkg.price} (${pkg.enrolled} students)`)
        })
        return fetchReviews(packages[0].id) // return the next promise
    })
    .then((reviews) => {
        console.log(`\n⭐ Reviews for top package:`)
        reviews.forEach(r => {
            console.log(`   ${r.student}: "${r.comment}" — ${r.rating}/5`)
        })
        console.log("\n✅ Dashboard fully loaded")
    })
    .catch((error) => {
        // this ONE catch handles errors from ALL three promises above
        console.log(`\n❌ Error: ${error.message}`)
    })
    .finally(() => {
        // runs whether it succeeded or failed
        console.log("🏁 Request finished — hiding loading spinner")})

//.finally()
//.finally() runs no matter what — whether the promise chain succeeded or failed.
// Use it for cleanup — hiding a loading spinner, closing a connection, logging that a request finished.