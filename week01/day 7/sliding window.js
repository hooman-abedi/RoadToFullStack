// //type 01
//
// const maxSumSubarray = (arr, k) =>{
//     let windowSum = 0;
//     for (let i = 0; i < k; i++){
//         windowSum += arr[i];
//     }
//
//     let maxSum = windowSum;
//     for (let i = k; i < arr.length; i++){
//         windowSum += arr[i];
//         windowSum -= arr[i - k];
//         maxSum = Math.max(maxSum, windowSum);
//
//     }
//     return maxSum;
// }
// const nums = [2, 1, 5, 1, 3, 2]
// console.log(maxSumSubarray(nums, 3))
//
// //Type 2 — Variable Size Window
// //The window grows and shrinks based on a condition. This is harder but more common in interviews.
// // Find the length of the longest substring without repeating characters
// const longestUniqueSubstring = (str) => {
//     const seen = new Set()
//     let left = 0
//     let maxLength = 0
//
//     for (let right = 0; right < str.length; right++) {
//         // if we've seen this character, shrink from the left until it's gone
//         while (seen.has(str[right])) {
//             seen.delete(str[left])
//             left++
//         }
//
//         seen.add(str[right])  // add new character to window
//         maxLength = Math.max(maxLength, right - left + 1)
//     }
//
//     return maxLength
// }
//
// const str1 = "abcabcbb"
// const str2 = "bbbbb"
// const str3 = "pwwkew"
//
// console.log(longestUniqueSubstring(str1)) // 3 → "abc"
// console.log(longestUniqueSubstring(str2)) // 1 → "b"
// console.log(longestUniqueSubstring(str3)) // 3 → "wke"
//

// Find the maximum average of any subarray of size k
// This is a fixed window problem

const findMaxAverage = (nums, k) => {
    let windowSum = 0

    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }


    let maxSum = windowSum;



    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i];
        windowSum -= nums[i - k];
        maxSum = Math.max(maxSum, windowSum);

    }
    let maxAverage = maxSum / k;
    return maxAverage
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)) // 12.75 → [12,-5,-6,50] avg = 51/4
console.log(findMaxAverage([5, 5, 5, 5, 5], 2))         // 5.0