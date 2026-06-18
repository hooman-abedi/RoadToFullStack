const multiply = (a, b) => {
    return a * b
}

const calculateTotal = (price, quantity) => {
    const total = multiply(price, quantity)
    return total
}

const result = calculateTotal(50, 3)
console.log(result) // 150
//1. calculateTotal is called → pushed onto stack
// 2. multiply is called inside calculateTotal → pushed on top
// 3. multiply finishes → popped off stack
// 4. calculateTotal finishes → popped off stack
// 5. Stack is empty