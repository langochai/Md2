class QuadraticEquation {
    a;
    b;
    c;
    constructor(a,b,c) {
        this.a = a
        this.b = b
        this.c = c
    }
    getDiscriminant(){
        return (Math.pow(this.b,2) - 4 * this.a * this.c)
    }
    getRoot1(){
        return ((-this.b + Math.sqrt(Math.pow(this.b,2)-4*this.a*this.c))/(2*this.a))
    }
    getRoot2(){
        return ((-this.b - Math.sqrt(Math.pow(this.b,2)-4*this.a*this.c))/(2*this.a))
    }
    getResult(){
        if(this.getDiscriminant()>0){
            console.log(this.getRoot1())
            console.log(this.getRoot2())
        } else if (this.getDiscriminant()===0){
            console.log(this.getRoot1())
        } else {
            console.log('The equation has no roots')
        }
    }
}
let equal1 = new QuadraticEquation(1,0,-1)
equal1.getResult()
let equal2 = new QuadraticEquation(1,-2,1)
equal2.getResult()
let equal3 = new QuadraticEquation(1,2,5)
equal3.getResult()