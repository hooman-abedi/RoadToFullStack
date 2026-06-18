// const userMap = new Map()
// userMap.set("ali123", { name: "Ali", role: "trainer" })
// userMap.set("sara456", { name: "Sara", role: "learner" })
//
// // Looking up in a Map/Object by key is O(1)
// //const user = userMap.get("ali123") // O(1) — instant regardless of map size
// const binarySearch = (sortedArray, target) => {
//     let left = 0;
//     let right = sortedArray.length -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)
//         if (sortedArray[mid] == target) {
//             console.log(`the index of your search is ${mid}`)
//         }
//         if (sortedArray[mid] < target) {
//             left = mid + 1
//         }
//         else {
//             right = mid - 1
//         }

//     }
//     console.log(`not found`)
//
// }
// const nums = [1, 3, 5, 7, 9, 11, 13, 15]
// binarySearch(nums, 7)
//
//
// const trainers = [
//     {name: "Hooman", rating : 5.0},
//     { name: "Sara", rating: 4.2 },
//     { name: "James", rating: 4.9 },
//     { name: "Mia", rating: 3.8 }
// ]
// // You have to look at every trainer to find the highest rated
// const findTopRated = (trainers) => {
//     let best = trainers[0]
//
//     for (const trainer of trainers) { // touches every element — O(n)
//         if (trainer.rating > best.rating) {
//             best = trainer
//         }
//     }
//
//     return best
// }
//
// // The O(n) version using a hash map
// const findDuplicatesFast = (arr) => {
//     const seen = new Set()
//     const duplicates = []
//
//     for (const num of arr) {     // one loop — O(n)
//         if (seen.has(num)) {
//             duplicates.push(num)
//         }
//         seen.add(num)
//     }
//
//     return duplicates
// }
//Exercise 1 — Identify the complexity
// For each function below, write a comment with its time complexity and one sentence explaining why. Do not run them — analyze by reading:
// Function A
const findFirst = (arr) => {
    return arr[0]
}
///O(1)

// Function B
const printAll = (arr) => {
    for (const item of arr) {
        console.log(item)
    }
}
//O(n)
// Function C
const printAllPairs = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j])
        }
    }
}
//O(n^2)

// Function D
const printThenDouble = (arr) => {
    for (const item of arr) {
        console.log(item)
    }
    for (const item of arr) {
        console.log(item * 2)
    }
}
//O(n)

// Function E
const logHalf = (arr) => {
    for (let i = 1; i < arr.length; i *= 2) {
        console.log(arr[i])
    }
}
//O(n log n)


//
// //Exercise 2 — Spot and fix the O(n²)
// // This function checks if any two numbers in an array add up to a target. It works but it's O(n²):
// //Rewrite it to run in O(n) time using a Set. The logic: as you loop through, for each number check if target - number is already in the Set.
// // If yes, you found a pair. If no, add the number to the Set and continue.
// const hasPairWithSum = (numbers, target) => {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) {
//                 return true
//             }
//         }
//     }
//     return false
// }
//
// hasPairWithSum([1, 4, 7, 3, 9], 10) // true (1+9 or 3+7)
// hasPairWithSum([1, 4, 7, 3, 9], 20) // false
const hasPairWithSum = (numbers, target) => {
    const seen = new Set()

    for (const num of numbers) {
        const complement = target - num  // what number do we need to make the pair?

        if (seen.has(complement)) {      // have we seen it before?
            return true                  // yes — pair found
        }

        seen.add(num)                    // no — remember this number for later
    }

    return false
}
console.log(hasPairWithSum([1, 4, 7, 3, 9], 10)) // true (1+9 or 3+7)
console.log(hasPairWithSum([1, 4, 7, 3, 9], 20)) // false

//Exercise 3 — Space complexity
// Look at these two functions that both reverse an array. Identify the time AND space complexity of each:
//Which one is more memory efficient and why?

// Version A
const reverseA = (arr) => {
    const reversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    return reversed
    //O(n)
}

// Version B
const reverseB = (arr) => {
    let left = 0 // swaps in place, no new array created
    let right = arr.length - 1

    while (left < right) {
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
    //O(n log n)

    return arr
}

//Exercise 4 — Analyze a real function
// This is a function you might actually write in the marketplace app. Analyze its time and space complexity:
const getTopRatedPackages = (packages, minRating, limit) => {
    const filtered = packages.filter(pkg => pkg.rating >= minRating)
    //O(n)
    const sorted = filtered.sort((a, b) => b.rating - a.rating)
    //O(n log n)
    const top = sorted.slice(0, limit)
    //O(n)
    return top
}
//O(n) + O(a+b) + O(n)
//Break it down line by line — what is the complexity of filter, sort, and slice individually, and what is the overall complexity?

//Exercise 5 — Write it yourself
// Write a function called mostFrequent that takes an array of strings and returns the string that appears most often. It must run in O(n) time.
const mostFrequent = (arr) =>{
    let maxCount = 0
    let freq = {}
    let result = null

    for (let i = 0; i < arr.length; i++) {

        freq[arr[i]] = (freq[arr[i]] || 0) +1

        if (freq[arr[i]] > maxCount) {
            maxCount = freq[arr[i]]
            result = arr[i]
        }
    }
    console.log(`${result} - appeared ${maxCount} times`)
    return result
}

const tags = ["fitness", "yoga", "fitness", "coding", "yoga", "fitness"]
console.log(mostFrequent(tags)) // "fitness" — appears 3 times