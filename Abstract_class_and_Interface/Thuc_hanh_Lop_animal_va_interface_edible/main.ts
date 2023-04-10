interface Edible{
    howToEat():string
}
abstract class Animals {
    abstract makeSound():string;
}
class Chicken extends Animals implements Edible{
    makeSound() {
        return 'cluck-cluck'
    }
    howToEat(): string {
        return 'could be fried'
    }
}
class Tiger extends Animals{
    makeSound() {
        return 'ROAR!!!'
    }
}
let tiger = new Tiger()
console.log(tiger.makeSound())
let chicken = new Chicken()
console.log(chicken.howToEat())


abstract class Fruits implements Edible{
    abstract howToEat(): string
}
class Apple extends Fruits{
    howToEat(): string {
        return "could be sliced";
    }
}
class Orange implements Edible{
    howToEat(): string {
        return "could be juiced"
    }
}
let apple = new Apple()
console.log(apple.howToEat())