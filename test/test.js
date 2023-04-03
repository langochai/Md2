function detectCollision(objects, point) {
    let result = []
    objects.forEach((element) =>{
        if (point.x >= element.x && point.x <= element.x + element.width &&

            point.y >= element.y && point.y <= element.y + element.height){
            result.push(element)
        }
    })
    return result
}

const myObjects = [

    {x:  10, y: 20, width: 30, height: 30},

    {x: -40, y: 20, width: 30, height: 30},

    {x:   0, y:  0, width: 10, height:  5}

]

console.log(detectCollision(myObjects, {x: 4, y: 2}))

// const array1 = [1, 2, 3, 4];
//
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (a, b) => a + b,
//     initialValue
// );
//
// console.log(sumWithInitial);