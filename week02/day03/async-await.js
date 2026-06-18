const trainersDB =[
    {
        id: 1,
        name: "Hooman Abedi",
        specialty: "Fitness & HIIT Training",
        rating: 10,
        totalStudent: 855,
        isVerified: true
    },
    {
        id: 2,
        name: "Sara Ahmadi",
        specialty: "Yoga & Mindfulness",
        rating: 4.7,
        totalStudents: 512,
        isVerified: true
    }
]

const packagesDB = [
    {
        id: 101,
        trainerId: 1,
        title: "8-Week HIIT Program",
        price: 149,
        category: "fitness",
        enrolled: 234,
        isPublished: true
    },
    {
        id: 102,
        trainerId: 1,
        title: "Morning Yoga Flow",
        price: 79,
        category: "fitness",
        enrolled: 189,
        isPublished: true
    },
    {
        id: 103,
        trainerId: 1,
        title: "Strength Foundations",
        price: 199,
        category: "fitness",
        enrolled: 98,
        isPublished: false
    },
    {
        id: 104,
        trainerId: 2,
        title: "30-Day Yoga Journey",
        price: 89,
        category: "yoga",
        enrolled: 310,
        isPublished: true
    }
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

// ============================================
// SIMULATED SERVER FUNCTIONS
// These pretend to be real database/API calls
// Each one takes time — just like a real server
// ============================================
const fetchTrainer = (trainerId) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trainer = trainersDB.find(t => t.id === trainerId)
            if (trainer){
                resolve(trainer)
            }else {
                reject(new Error(`No Trainer found for trainer ID: ${trainerId}`))
            }
        },1500)
    })
}
const fetchPackages = (trainerId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const packages = packagesDB.filter(p => p.trainerId === trainerId)
            if (packages.length > 0){
                resolve(packages)
            }else {
                reject(new Error(`No packages found for trainer ID: ${trainerId}`))
            }
        },1000)

    })
}

const fetchReviews = (packageId) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const reviews = reviewsDB.filter(r => r.packageId === packageId)
            if (reviews.length > 0){
                resolve(reviews)
            }else {
                reject(new Error(`No Reviews found for package ID: ${packageId}`))
            }
        },800)
    })
}

const fetchCategory = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (categoriesDB.length>0) {
                resolve(categoriesDB)
            } else {
                reject(new Error(`No category found with ID: ${categoryId}`))
            }
        }, 600)
    })
}

const loadDashoard = async (trainerId) =>{

    try {
        console.log("Loading ...")
        const trainer = await fetchTrainer(trainerId)
        console.log(`✅ Found: ${trainer.name}`)
        console.log(`   Verified: ${trainer.isVerified ? "Yes ✓" : "No"}`)
        console.log(`   Rating: ${trainer.rating} ⭐`)

        const packages = await fetchPackages(trainerId)
        console.log(`📦 Packages (${packages.length} total):`)
        packages.forEach(pkg => console.log(`   - ${pkg.title} — $${pkg.price}`))

        const reviews = await fetchReviews(packages[0].id)
        console.log(`\n⭐ Reviews for "${packages[0].title}":`)
        reviews.forEach(r => {
            console.log(`   ${r.student}: "${r.comment}" — ${r.rating}/5`)
        })
        const categories = await fetchCategory()
        console.log(`📂 All Categories (${categories.length} total):`)
        categories.forEach(c => {
            console.log(`   - ${c.name} | Packages: ${c.totalPackages} | Trainers: ${c.totalTrainers}`)
        })


    } catch (error){
        console.log(`❌ Error`)
        console.log(`   Reason: ${error.message}`)
    } finally {
        console.log(`🏁 Request finished\n`)
    }
}
const loadMarketplace = async () => {
    try {
        console.log("🚀 Loading marketplace...\n")
        console.time("load time")

        // these three don't depend on each other — run them together
        const [trainer, packages, category] = await Promise.all([
            fetchTrainer(1),
            fetchPackages(1),
            fetchCategory(1)
        ])

        console.timeEnd("load time")

        console.log(`👤 Trainer: ${trainer.name}`)
        console.log(`📦 Packages: ${packages.length} available`)
        console.log(`🏷️  Category: ${category.name} (${category.totalPackages} total packages)`)

    } catch (error) {
        console.log(`❌ Failed: ${error.message}`)
    }
}

loadMarketplace()

loadDashoard(1)
