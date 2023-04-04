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
        return ()
    }
}