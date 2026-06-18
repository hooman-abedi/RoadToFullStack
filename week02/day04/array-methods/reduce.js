// ============================================
// COMPLETE DATABASE
// ============================================

const trainersDB = [
    { id: 1, name: "Hooman Abedi", specialty: "Fitness", rating: 4.9, totalStudents: 855, isVerified: true, yearsActive: 5 },
    { id: 2, name: "Sara Ahmadi", specialty: "Yoga", rating: 4.7, totalStudents: 512, isVerified: true, yearsActive: 3 },
    { id: 3, name: "James Kim", specialty: "Coding", rating: 4.5, totalStudents: 320, isVerified: false, yearsActive: 2 },
    { id: 4, name: "Mia Torres", specialty: "Nutrition", rating: 4.8, totalStudents: 198, isVerified: true, yearsActive: 4 },
    { id: 5, name: "Carlos Nava", specialty: "Boxing", rating: 3.9, totalStudents: 95, isVerified: false, yearsActive: 1 }
]

const packagesDB = [
    { id: 101, trainerId: 1, title: "8-Week HIIT Program", price: 149, enrolled: 234, isPublished: true, tags: ["hiit", "fitness", "weight-loss"] },
    { id: 102, trainerId: 1, title: "Morning Yoga Flow", price: 79, enrolled: 189, isPublished: true, tags: ["yoga", "morning", "flexibility"] },
    { id: 103, trainerId: 1, title: "Strength Foundations", price: 199, enrolled: 98, isPublished: false, tags: ["strength", "weights", "fitness"] },
    { id: 104, trainerId: 2, title: "30-Day Yoga Journey", price: 89, enrolled: 310, isPublished: true, tags: ["yoga", "mindfulness", "beginner"] },
    { id: 105, trainerId: 3, title: "JavaScript Bootcamp", price: 299, enrolled: 178, isPublished: true, tags: ["coding", "javascript", "beginner"] },
    { id: 106, trainerId: 4, title: "Clean Eating Plan", price: 59, enrolled: 412, isPublished: true, tags: ["nutrition", "health", "beginner"] },
    { id: 107, trainerId: 5, title: "Boxing Fundamentals", price: 119, enrolled: 67, isPublished: false, tags: ["boxing", "fitness", "strength"] }
]

const purchasesDB = [
    { id: 1, studentId: 201, packageId: 101, amount: 149, date: "2026-01-15" },
    { id: 2, studentId: 202, packageId: 104, amount: 89, date: "2026-01-18" },
    { id: 3, studentId: 201, packageId: 105, amount: 299, date: "2026-02-01" },
    { id: 4, studentId: 203, packageId: 101, amount: 149, date: "2026-02-14" },
    { id: 5, studentId: 204, packageId: 106, amount: 59, date: "2026-02-20" },
    { id: 6, studentId: 202, packageId: 101, amount: 149, date: "2026-03-01" },
    { id: 7, studentId: 205, packageId: 102, amount: 79, date: "2026-03-10" }
]

//map transforms every item into something new — same number of items.
//
// filter keeps some items and removes others — fewer items.
//
// reduce takes an entire array and boils it down to a single value — one number, one object,
//
// reduce takes two arguments:
//
//     A callback function that runs on every item
// An initial value — where the accumulation starts

//array.reduce((accumulator, currentItem) => {
//     // do something
//     return newAccumulator
// }, initialValue)

// purchasesDB has 7 purchases with different amounts
// we want one number — the total of all amounts

const totalRevenue = purchasesDB.reduce((total, purchase) =>{
    return total + purchase.amount
},0)
console.log(`Total revenue: $${totalRevenue}`)
//Start:       total = 0       (initial value)
// Purchase 1:  total = 0 + 149  = 149
// Purchase 2:  total = 149 + 89 = 238
// Purchase 3:  total = 238 + 299 = 537
// Purchase 4:  total = 537 + 149 = 686
// Purchase 5:  total = 686 + 59  = 745
// Purchase 6:  total = 745 + 149 = 894
// Purchase 7:  total = 894 + 79  = 973
// Result: 973


//This is where reduce gets powerful. Instead of reducing to a number, we reduce to an object:
// We want to know how many trainers are in each specialty
// Result should look like: { Fitness: 1, Yoga: 1, Coding: 1, Nutrition: 1, Boxing: 1
const trainersBySpecialty = trainersDB.reduce((group, trainer) =>{
    const specialty = trainer.specialty
    if (group[specialty]){
        group[specialty] = group[specialty] + trainer.totalStudents
    }else {
        group[specialty] = trainer.totalStudents // first time seeing this specialty — start at
    }
    return group
},{}) // start with an empty object
console.log(trainersBySpecialty)

//Find the most expensive package
const mostExpensive = packagesDB.reduce((most,pkg) =>{
    if (pkg.price > most.price){
        return pkg
    }
    return most

},packagesDB[0])
console.log(`Most expensive: ${mostExpensive.title} — $${mostExpensive.price}`)

const mostExpensi = packagesDB.reduce((most,pkg)=>{
    return pkg.price > most.price ? pkg : most
},packagesDB[0])
console.log(`Most expensive: ${mostExpensi.title} — $${mostExpensi.price}`)
