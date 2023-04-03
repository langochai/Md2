const inventory = [

    {type:   "machine", value: 5000},

    {type:   "machine", value:  650},

    {type:      "duck", value:   10},

    {type: "furniture", value: 1200},

    {type:   "machine", value:   77}

]

let totalMachineValue = (inventory) =>{
    let sum = 0
    inventory.forEach((element)=>{
        if(element.type === "machine"){
            sum += element.value
        }
    })
    return sum
}

console.log(totalMachineValue(inventory))