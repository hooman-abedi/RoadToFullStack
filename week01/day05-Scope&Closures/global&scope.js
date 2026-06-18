//Global Scope
// Variables declared outside any function or block. Accessible from anywhere in your file.
const appName = "trainingHub"
const showApp = () => {
    console.log(appName);
}
showApp();
console.log(showApp());


const processPayment = (amount) => {
    const fee = amount * 0.03
    const total = amount + fee;
    console.log(`total: $${total}`)
}

processPayment(100);
// console.log(fee)    // ❌ ReferenceError — fee doesn't exist out here
// console.log(total)  // ❌ ReferenceError — total doesn't exist out here

const functionA = () => {
    const result = "A's result"
    console.log(result) // "A's result"
}

const functionB = () => {
    const result = "B's result" // completely separate variable
    console.log(result) // "B's result"
}

functionA()
functionB()
// They never interfere with each other


const platform = "TrainingHub"  // global scope

const getUser = () => {
    const userName = "Ali"       // function scope of getUser

    const showWelcome = () => {
        const message = "Welcome" // function scope of showWelcome

        // showWelcome can see:
        console.log(message)   // ✅ its own scope
        console.log(userName)  // ✅ parent scope (getUser)
        console.log(platform)  // ✅ grandparent scope (global)
    }

    showWelcome()

    // getUser can see:
    console.log(userName)  // ✅ its own scope
    console.log(platform)  // ✅ parent scope (global)
    // console.log(message)   // ❌ ReferenceError — child scope, not accessible
}

getUser()