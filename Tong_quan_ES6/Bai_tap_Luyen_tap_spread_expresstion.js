// function replace(arr,index,secondArr) {
//     arr.splice(index,2,...secondArr)
// }
//
// let testArray = [1, 2, 100, 100, 6]
//
// replace(testArray, 2, [3, 4, 5])
//
// console.log(testArray)
//
//
// function copyReplace(array, from, to, secondArr) {
//     let arr1 = array.slice(0,from)
//     let arr2 = array.slice(to)
//     return [...arr1,...secondArr,...arr2]
// }
//
// console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))




let customerOrder = []

function recordOrders(time,...birds) {
    customerOrder.push({time,birds})
}
recordOrders(new Date, "coffee", "yogurt", "pizza")
console.log(customerOrder)

// let customerOrder = []
//
// function recordOrders(time) {
//
//     customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})
//
// }
//
// recordOrders(new Date, "coffee", "yogurt", "pizza")
//
// console.log(customerOrder)