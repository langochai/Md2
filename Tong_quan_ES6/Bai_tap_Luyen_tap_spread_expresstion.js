function replace(arr,index,secondArr) {
    arr.splice(index,arr.length-index)
    arr.push(...secondArr)
}

let testArray = [1, 2, 100, 100, 6]

replace(testArray, 2, [3, 4, 5])

console.log(testArray)


function copyReplace(array, index, secondArr) {
    array.splice(index,array.length)
    return [...array,...secondArr]
}

console.log(copyReplace([1, 2, 100, 200, 6], 2,  [3, 4, 5]))




let customerOrder = []

function recordOrders(time,arr) {
    customerOrder.push(time,...arr)
}

recordOrders(new Date, ["coffee", "yogurt", "pizza"])

console.log(customerOrder)