class Point2D {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x
    }

    getY(): number {
        return this.y
    }

    setX(x: number) {
        this.x = x
    }

    setY(y: number) {
        this.y = y
    }

    getXY(): object {
        return {x: this.x, y: this.y}
    }
}

class Point3D extends Point2D {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getX(): number {
        return super.getX();
    }

    getY(): number {
        return super.getY();
    }

    getZ(): number {
        return this.z
    }

    setX(x: number) {
        super.setX(x);
    }

    setY(y: number) {
        super.setY(y);
    }

    setZ(z: number) {
        this.z = z
    }

    getXYZ(): object {
        return {x: this.x, y: this.y, z: this.z}
    }

    setXYZ(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }

}

let xy = new Point2D(1,2)
console.log(xy.getXY())
let xyz = new Point3D(6,7,8)
console.log(xyz.getXYZ())