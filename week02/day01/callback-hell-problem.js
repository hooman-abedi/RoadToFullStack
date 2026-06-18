const trainerDatabase = {
    id: 1,
    name: "Ali Hassan",
    specialty: "Fitness & HIIT Training",
    rating: 4.9
}
const packagesDatabase = [
    { id: 101, trainerId: 1, title: "8-Week HIIT Program", price: 149, enrolled: 234 },
    { id: 102, trainerId: 1, title: "Morning Yoga Flow", price: 79, enrolled: 189 },
    { id: 103, trainerId: 1, title: "Strength Foundations", price: 199, enrolled: 98 }
]
const reviewsDatabase = [
    { packageId: 101, student: "Sara M.", comment: "Life changing!", rating: 5 },
    { packageId: 101, student: "James K.", comment: "Tough but worth it", rating: 5 },
    { packageId: 101, student: "Mia R.", comment: "Lost 8kg in 8 weeks", rating: 5 }
]

const fetchTrainer = (trainerId, callback)=>{
    setTimeout(()=> callback(null,trainerDatabase),1000)
}
const fetchPackages = (trainerId, callback)=>{
    setTimeout(()=> {
        const trainerPackages = packagesDatabase.filter(p => p.trainerId === trainerId)
        callback(null, trainerPackages)
    },1000)
}
const fetchReviews = (packageId, callback)=>{
    setTimeout(()=> {
        const packagesReview = reviewsDatabase.filter(r => r.packageId === packageId)
        callback(null, packagesReview)

    },1000)

}

// Now use them together — this is callback hell
console.log("🚀 Loading trainer dashboard...")
fetchTrainer(1, (error, trainer) => {
    if (error) return console.log("❌", error.message)
    console.log(`\n👤 Trainer: ${trainer.name}`)

    fetchPackages(trainer.id,(error, packages) => {
        if (error) return console.log("❌", error.message)
        console.log(`📦 Packages: ${packages.length} total`)
        packages.forEach(p => console.log(`   - ${p.title} ($${p.price})`))

        fetchReviews(packages[0].id, (error, reviews) => {
            if (error) return console.log("❌", error.message)
            console.log(`\n⭐ Reviews for "${packages[0].title}":`)
            reviews.forEach(r  => console.log(`   ${r.student}: "${r.comment}" — ${r.rating}/5`))

            console.log("\n✅ Dashboard fully loaded")

        })
    })
})