const trainer = {
    name : "hooman",
    age : 28,
    country : "Canada",
    isVerified: true
}
console.log(trainer.name)
console.log("country")

const { name , age, country } = trainer;
console.log(name)
console.log(age)

const {name:trainerName} = trainer;
console.log(trainerName)

const {rating=5} = trainer;
console.log(rating)

const trainerTwo = {
    name : "hooman",
    age : 28}

const copy = {...trainerTwo}
const updated = {...trainerTwo , age:30, country: "Canada"}
console.log(copy)
console.log(updated)

const package = {
    title: "Morning Fitness Program",
    price: 99,
    trainer: "Ali",
    category: "fitness",
    isPublished: false
}

const {title, price,category} = package
console.log(title,price, category)
const updatedPrice = {...package, price:120, isPublished: true}
console.log(updatedPrice)
console.log(`"${title}"  - $${price} (${category})`)