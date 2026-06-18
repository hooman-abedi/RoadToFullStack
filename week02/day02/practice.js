//Exercise 1 — Build a Promise from scratch
// You have this data:
const categoryData = {
    id: 5,
    name: "Fitness",
    totalPackages: 47,
    totalTrainers: 12
}
//Write a function called fetchCategory that:
//
// Takes a categoryId
// Returns a Promise
// After 1 second: if categoryId is 5, resolves with categoryData
// If anything else, rejects with new Error("Category not found")
//
// Call it twice — once with 5, once with 99. Use .then(), .catch(), and .finally() on both calls. Log meaningful output for each case.

const fetchCategory = (categoryId) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (categoryId === 5){
                resolve(categoryData)
            }
            else {
                reject(new Error(`Category not found`))
            }
        },1000)
    })
}
fetchCategory(5).then((category)=>{
    console.log(`Category's name: ${category.name}`)
    console.log(`number of packages: ${category.totalPackages}`)
    console.log(`number of trainers: ${category.totalTrainers}`)
}).catch(error => {
    console.log(error.message)
})

//Exercise 2 — Chain two Promises
// Using fetchTrainer and fetchPackages from the lesson, write a promise chain that:
//
// Loads trainer with ID 1
// Then loads their packages
// Logs the trainer name and each package title with its price
// Has one .catch() that handles any error in the chain
// Has a .finally() that logs "Load complete"
//
// Do not copy from the lesson examples. Write it yourself.

const trainerData = {
    id:1,
    name:"Hooman Abedi",
    specialty: "Fitness & HIIT Training",
    rating: 4.9,
    totalStudents: 847
}
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


const fetchTrainer = (trainerId)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (trainerId === 1){
                resolve(trainerData)
            }
            else {
                reject(new Error(`No trainer found for trainer ID: ${trainerId}`))
            }
        },3000)
    })
}
const fetchPackages = (trainerId)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const findingPackages = packagesData.filter(p => p.trainerId === trainerId)
            if (findingPackages.length > 0){
                resolve(findingPackages)
            }
            else {
                reject(new Error(`No packages found for trainer ID: ${trainerId}`))
            }
        },3000)
    })
}

fetchTrainer(1)
    .then((trainer)=>{
        console.log(`Trainer name: ${trainer.name} with specialty: ${trainer.specialty} and with the rating of ${trainer.rating} with total ${trainer.totalStudents} students`)
        return fetchPackages(trainer.id)

}).then((packages)=>{
    packages.forEach((p)=>{
        console.log(`package's title is ${p.title} and it's price is ${p.price}`)
    })
}).catch(error => {
    console.log(error.message)
}).finally(() => {
    console.log("Load complete")})

//Exercise 3 — Broken promise, find the bug
//This code has a bug that breaks the chain. Find it, explain what happens, and fix it:
const trainerDataa = {
    id: 1,
    name: "Ali Hassan",
    rating: 4.9
}

const packagesDataa = [
    { id: 101, trainerId: 1, title: "HIIT Program", price: 149 },
    { id: 102, trainerId: 1, title: "Yoga Flow", price: 79 }
]

const fetchTrainerr = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (id === 1){
                resolve(trainerDataa)
            }
            else {
                reject(new Error(`No trainer found for trainer ID: ${id}`))
            }
        } , 5000)
    })
}

const fetchPackagess = (trainerId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const loadPackages = packagesDataa.filter(p => p.trainerId === trainerId)
            if (loadPackages.length > 0){resolve(loadPackages)}
            else {reject(new Error(`No packages found for trainer ID: ${trainerId}`))}
        }, 5000)
    })
}

fetchTrainerr(1)
    .then((trainer) => {
        console.log(`Trainer: ${trainer.name}`)
        return fetchPackagess(trainer.id)
    })
    .then((packages) => {
        console.log(`Packages: ${packages.length}`)
        packages.forEach(p => console.log(`- ${p.title}`))
    })
    .catch((error) => {
        console.log(error.message)
    })