var Fan = /** @class */ (function () {
    function Fan() {
        // SLOW : number = 1;
        // MEDIUM : number = 2;
        // FAST : number = 3;
        this._Speed = 1;
        this._Status = false;
        this._Radius = 5;
        this._Color = 'blue';
    }
    Fan.prototype.getSpeed = function () {
        return this._Speed;
    };
    Fan.prototype.setSpeed = function (value) {
        this._Speed = value;
    };
    Fan.prototype.getStatus = function () {
        return this._Status;
    };
    Fan.prototype.setStatus = function (value) {
        this._Status = value;
    };
    Fan.prototype.getRadius = function () {
        return this._Radius;
    };
    Fan.prototype.setRadius = function (value) {
        this._Radius = value;
    };
    Fan.prototype.getColor = function () {
        return this._Color;
    };
    Fan.prototype.setColor = function (value) {
        this._Color = value;
    };
    Fan.prototype.toString = function () {
        console.log(this._Speed);
        console.log(this._Color);
        console.log(this._Radius);
        if (this._Status) {
            console.log('on');
        }
        else {
            console.log('off');
        }
    };
    return Fan;
}());
// Đối tượng Fan 1: Gán giá trị lớn nhất cho speed, radius là 10, color là yellow và quạt ở trạng thái bật.
// Đối tượng Fan 2: Gán giá trị trung bình cho speed, radius là 5, color là blue và quạt ở trạng thái tắt.
var fan1 = new Fan();
fan1.setSpeed(3);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setStatus(true);
var fan2 = new Fan();
fan2.setSpeed(2);
console.log(fan1.getColor());
