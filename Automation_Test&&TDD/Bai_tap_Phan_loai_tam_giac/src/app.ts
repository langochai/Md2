export class TriangleClassifier {
    firstSide:number;
    secondSide:number;
    thirdSide:number;

    constructor(firstSide: number, secondSide: number, thirdSide: number) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }
    isTriangle():boolean{
        if (this.firstSide<=0||this.secondSide<=0||this.thirdSide<=0) return false
        else return (this.firstSide+this.secondSide>this.thirdSide&&
           this.secondSide+this.thirdSide>this.firstSide&&
           this.thirdSide+this.firstSide>this.secondSide)
    }
    classify(){
        if(this.isTriangle()){
            if(this.firstSide===this.secondSide&&this.secondSide===this.thirdSide) return 'tam giac deu'
            else if (this.firstSide==this.secondSide&&this.secondSide!==this.thirdSide) return 'tam giac can'
            else return 'tam giac thuong'
        } else {
            return 'khong phai tam giac'
        }
    }
}