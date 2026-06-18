
const trainerDatabase = {
    id: 1,
    name: "Ali Hassan",
    specialty: "Fitness & HIIT Training",
    rating: 4.9,
    totalStudents: 847
}

// Notice: callback receives (error, data) — error first, always
const fetchTrainer = (trainerId, callback) =>{
    console.log(`⏳ Looking up trainer ${trainerId}...`)

    setTimeout(()=>{
        // something went wrong — pass the error, no data
        if (trainerId !== 1){
            callback(new Error(`No trainer found with ID ${trainerId}`),null)
        }
        else {
            callback(null,trainerDatabase)
        }
    },1500)
}
fetchTrainer(2, (error, trainer) => {
    //The if (error) return pattern is critical. If there's an error, you log it and stop —
    // you don't try to use trainer.name on a null value, which would crash your app.
    if (error) {
        console.log("❌ Error:", error.message)
        return
    }
    console.log(`✅ Found trainer: ${trainer.name}`)
    console.log(`   Rating: ${trainer.rating} ⭐`)
})

