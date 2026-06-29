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
// Use reduce to calculate the total number of enrolled students across all published packages only. Log:
// Total enrolled students (published only): 1190
// Hint — you'll need to filter first, then reduce. Or you can do both inside reduce using an if statement.

const allEnrolled = packagesDB
    .filter(pkg => pkg.isPublished === true)
    .reduce((total, sum) =>{
        return total + sum.enrolled
    },0)
console.log(`Total enrolled students (published only): `+ allEnrolled)

//Exercise 2 — reduce to an object
// Use reduce to group packages by trainerId.
// The result should be an object where each key is a trainerId and the value is an array of that trainer's package titles:
//{
//   '1': ['8-Week HIIT Program', 'Morning Yoga Flow', 'Strength Foundations'],
//   '2': ['30-Day Yoga Journey'],
//   '3': ['JavaScript Bootcamp'],
//   '4': ['Clean Eating Plan'],
//   '5': ['Boxing Fundamentals']
// }

const groupedPackages = packagesDB.reduce((group, pkg) =>{
    const trainerId = pkg.trainerId

    if (group[trainerId]){
        group[trainerId].push(pkg.title)
    }else{
        group[trainerId] = [pkg.title]
    }
    return group
},{})
console.log(groupedPackages)

//Exercise 3 — some and every
// Answer these four questions using some and every. Log a clear message for each:
//
// Do all packages have at least one tag?
const atLeastOneTag = packagesDB.every(pkg => pkg.tags && pkg.tags.length > 0)
console.log(`All packages have at least one tag: ${atLeastOneTag ? "Yes" : "No"}`)

// Is there any package with more than 400 enrolled students?
const moreThanFourHundred = packagesDB.some(pkg => pkg.enrolled > 400)
console.log(`Any package with 300+ enrolled: ${moreThanFourHundred ? "Yes" : "No"}`)
// Are all trainers with 4+ years active also verified?
const activeAndVerified = trainersDB
    .filter(pkg => pkg.yearsActive > 3)
    .every(trainer => trainer.isVerified === true)
console.log(`All 4+ year trainers are verified: ${activeAndVerified ? "Yes" : "No"}`)
// Does any trainer have a rating below 4.0?
const badRating = trainersDB.some(tr => tr.rating < 4)
console.log(`Any trainer rated below 4.0: ${badRating ? "Yes" : "No"}`)

//Exercise 4 — flatMap and real data
// Using flatMap, get all tags from all packages. Then find how many times the tag "fitness" appears across all packages. Log:
// "fitness" appears in 3 packages
const tagsFinder = packagesDB.flatMap(pkg => pkg.tags)
const fitnessCounter = tagsFinder.reduce((total, tag) =>{
    if (tag === "fitness"){
        return total + 1
    }
    return total
},0)
console.log(`"fitness" appears in ${fitnessCounter} packages`)

//Exercise 5 — Combining everything
// Write a function called getMarketplaceSummary that uses reduce, filter, some, and every to log this full summary:
//===== Marketplace Summary =====
// Total packages: 7
// Published packages: 5
// Total revenue: $973
// Most expensive package: JavaScript Bootcamp ($299)
// All trainers verified: No
// Any package with 300+ enrollments: Yes
// ===============================
const getMarketplaceSummary = ()=>{

    const published = packagesDB.filter(pkg => pkg.isPublished === true)
    const numPublished = published.length
    const totRevenue = purchasesDB.reduce((total, purchase) =>{
        return total + purchase.amount
    },0)
    const mostExpensive = packagesDB.reduce((most, pkg) =>{
        if (pkg.price > most.price){
            return pkg
        }
        return most
    },packagesDB[0])
    const allVerified = trainersDB.every(tr => tr.isVerified === true)

    const enrolled = packagesDB
        .some(pkg => pkg.enrolled > 300)


    console.log(`===== Marketplace Summary =====`)
    console.log(`Total packages: ${packagesDB.length}`)
    console.log(`Published packages: ${numPublished}`)
    console.log(`Total revenue: $${totRevenue}`)
    console.log(`Most expensive package: ${mostExpensive.title} ($${mostExpensive.price})`)
    if (allVerified){
        console.log(`All trainers verified: Yes`)
    }else if(!allVerified){
        console.log(`All trainers verified: No`)
    }
    console.log(`Any package with 300+ enrollments: ${enrolled ? "Yes" : "No"}`)
    console.log(`===============================`)
}
getMarketplaceSummary()
