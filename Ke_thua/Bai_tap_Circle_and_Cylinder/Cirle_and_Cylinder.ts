/*Lớp Circle có những thuộc tính mô tả bán kính, màu sắc,
 các getter/setter cho các thuộc tính đó, và những thuộc tính liên đới
 như diện tích
 */
class Circle {
    radius: number;
    color: string;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }
    getRadius():number{
        return this.radius
    }
    getColor():string{
        return this.color
    }
    setRadius(radius:number){
        this.radius = radius
    }
    setColor(color:string){
        this.color = color
    }
    getArea():number{
        return this.radius*this.radius*Math.PI
    }
}
/* Lớp Cylinder mở rộng lớp Circle bằng cách
bổ sung thuộc tính chiều cao cũng như có thể có thêm phương thức lấy thể tích.
 */
class Cylinder extends Circle{
    radius:number;
    color:string;
    height: number;


    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this.radius = radius;
        this.color = color;
        this.height = height;
    }

    getArea(): number {
        return super.getArea();
    }

    getVolume(): number{
        return this.getArea()*this.height
    }
}

let cyn = new Cylinder(2,'green',2)
console.log(cyn.getVolume())