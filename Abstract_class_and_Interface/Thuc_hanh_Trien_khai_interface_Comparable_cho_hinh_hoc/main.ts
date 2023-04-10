interface Comparable{
    compareTo(o: Object): number;
}
class Circle{
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number{
        return this.radius;
    }

    setRadius(radius: number):void{
        this.radius = radius;
    }

    toString(): string {
        return "A Circle with radius="
            + this.getRadius();
    }
}
class ComparableCircle extends Circle implements Comparable{

    constructor(radius: number) {
        super(radius);
    }

    compareTo(o: ComparableCircle): number {
        if (this.getRadius() > o.getRadius()) return 1;
        else if (this.getRadius() < o.getRadius()) return -1;
        else return 1;
    }
}

let circles = [];
circles[0] = new ComparableCircle(88);
circles[1] = new ComparableCircle(20);
circles[2] = new ComparableCircle(30);

let result = circles[1].compareTo(circles[2]);

if(result == 1){
    console.log("The current circle is larger.");
}else{
    console.log("The current circle is smaller.");
}