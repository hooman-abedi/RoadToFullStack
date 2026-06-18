//Exercise 1 — Basic async/await
// Write an async function called loadTrainerProfile that:
//
// Takes a trainerId as a parameter
// Awaits fetchTrainer(trainerId)
// Logs the trainer's name, specialty, rating, total students, and whether they're verified
// Handles errors with try/catch — logs "Could not load profile: " + the error message
// Always logs "Profile request finished" in finally
//
// Call it three times:
//
// loadTrainerProfile(1) — Ali Hassan
// loadTrainerProfile(2) — Sara Ahmadi
// loadTrainerProfile(99) — should hit the catch block

const trainersDB =[
    {id: 1, name: "Hooman Abedi", specialty: "Fitness & HIIT Training", rating: 10, totalStudents: 855, isVerified: true},
    {id: 2, name: "Sara Ahmadi", specialty: "Yoga & Mindfulness", rating: 4.7, totalStudents: 512, isVerified: true}
]

const packagesDB = [
    {id: 101, trainerId: 1, title: "8-Week HIIT Program", price: 149, category: "fitness", enrolled: 234, isPublished: true},
    {id: 102, trainerId: 1, title: "Morning Yoga Flow", price: 79, category: "fitness", enrolled: 189, isPublished: true},
    {id: 103, trainerId: 1, title: "Strength Foundations", price: 199, category: "fitness", enrolled: 98, isPublished: false},
    {id: 104, trainerId: 2, title: "30-Day Yoga Journey", price: 89, category: "yoga", enrolled: 310, isPublished: true}
]
const reviewsDB = [
    { id: 1, packageId: 101, student: "Sara M.", comment: "Life changing!", rating: 5 },
    { id: 2, packageId: 101, student: "James K.", comment: "Tough but worth it", rating: 5 },
    { id: 3, packageId: 101, student: "Mia R.", comment: "Lost 8kg in 8 weeks", rating: 5 },
    { id: 4, packageId: 102, student: "Carlos B.", comment: "Perfect morning routine", rating: 4 },
    { id: 5, packageId: 104, student: "Priya S.", comment: "Sara is an amazing coach", rating: 5 }
]

const categoriesDB = [
    { id: 1, name: "Fitness", totalPackages: 47, totalTrainers: 12 },
    { id: 2, name: "Yoga", totalPackages: 23, totalTrainers: 8 },
    { id: 3, name: "Coding", totalPackages: 31, totalTrainers: 15 }
]

const fetchTrainer = (trainerId) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trainer = trainersDB.find(t => t.id === trainerId)
            if (trainer){
                resolve(trainer)
            }else {
                reject(new Error(`Could not load profile for ID:  ${trainerId}`))
            }
        },1500)
    })
}

const fetchPackages = (trainerId) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const packages = packagesDB.filter(p => p.trainerId === trainerId)
            if (packages.length > 0){
                resolve(packages)
            }else {
                reject(new Error(`couldn't find any packages for ID:  ${trainerId}`))
            }
        },1500)
    })
}

const fetchReviews = (packageId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const reviews = reviewsDB.filter(r => r.packageId === packageId)
            resolve(reviews) // always resolves — empty array if none found
        }, 2500)
    })
}
const fetchCategory = (categoryId) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const categories = categoriesDB.find(c => c.id === categoryId)
            if (categories){
                resolve(categories)
            }
            else {
                reject(new Error(`couldn't find any categories for ID: ${categoryId}`))
            }
        },1500)
    })
}

const loadTrainerProfile = async (trainerId) => {
    try {
        console.log(`Loading Trainer Profile for trainer: ${trainerId}`)
        const trainer = await fetchTrainer(trainerId)
        console.log(    `trainer's name: ${trainer.name} - trainer's speciality: ${trainer.specialty} - with ${trainer.totalStudents} students - Verified: ${trainer.isVerified ? "Yes ✓" : "No"}`)

    }catch (error) {
        console.log(error.message)
    }
    finally {
        console.log("Profile request finished")

    }
}
loadTrainerProfile(1)
loadTrainerProfile(2)
loadTrainerProfile(99)

// Exercise 2 — Sequential awaits
// Write an async function called loadPackageDetails that:

// Takes a trainerId
// Awaits fetchTrainer(trainerId) — logs trainer name and rating
// Awaits fetchPackages(trainerId) — logs each package title, price, and enrollment count
// Awaits fetchReviews on the last package in the array — logs each review's student name, comment, and rating
// One try/catch covers everything
// Finally logs "Package details complete"
//
// Call it with trainerId = 1.
// Think about how to get the last package — not packages[0], not hardcoded. Use the array length.
const loadPackageDetails = async (trainerId) => {

    try {
        const trainer = await fetchTrainer(trainerId)
        console.log(`trainer's name: ${trainer.name} - with the rating ${trainer.rating}/10`)
        const packages = await fetchPackages(trainerId)
        packages.forEach(p => {
            console.log(`packages title: ${p.title}`)
            console.log(`price: ${p.price}`)
            console.log(`number of enrollments: ${p.enrolled}`)

        })

        const lastPackage = packages[packages.length - 1]
        const reviews = await fetchReviews(lastPackage.id)
        if (reviews.length === 0) {
            console.log(`No reviews yet for "${lastPackage.title}"`)
        } else {
            reviews.forEach(review => {
                console.log(`${review.student}: "${review.comment}" — ${review.rating}/5`)
            })
        }


    }catch (error) {
        console.log(`error: ${error.message}`)
    }
    finally {

        console.log(`"Package details complete"`)
    }
}
loadPackageDetails(1)


//Exercise 3 — Fix the forEach bug
// This code is broken. Run it first, observe the wrong output, then fix it with for...of. Write a comment explaining what was wrong:
const loadAllTrainers = async () => {
    const trainerIds = [1, 2]

    console.log("Loading all trainers...")
//forEach doesn't know or care about async. It fires every callback immediately and moves on. "All trainers loaded" prints before anything load because forEach doesn't wait.
    for(const id of trainerIds) {
        const trainer = await fetchTrainer(id)
        console.log(`Loaded: ${trainer.name} — ${trainer.totalStudents} students`)
    }

    console.log("All trainers loaded")
}

loadAllTrainers()


// Exercise 4 — Promise.all
// Write an async function called loadHomePage that loads all of this simultaneously:
//
// fetchTrainer(1)
// fetchPackages(1)
// fetchCategory(1)
//
// Use Promise.all. Measure the load time with console.time. Log:
// 👤 Ali Hassan — 4.9 ⭐
// 📦 3 packages available
// 🏷️  Category: Fitness — 47 packages total
// ⏱ Loaded in: ~1500ms

const loadHomePage = async () => {
    try {
        console.log("🚀 Loading Homepage...\n")
        console.time("load time")

        const [trainer, package, category] = await Promise.all([
            fetchTrainer(1),
            fetchPackages(1),
            fetchCategory(1)


        ])
        console.timeEnd("load time")

        console.log(`👤${trainer.name} - ${trainer.rating} ⭐`)

        console.log(`📦 ${package.length} packages available`)
        console.log(`🏷️  Category: (${category.name} — ${category.totalPackages} packages total)`)
    }catch (error) {

        console.log(error.message)
    }
}
loadHomePage();