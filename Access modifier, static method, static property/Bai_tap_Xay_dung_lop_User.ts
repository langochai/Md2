/*Thiết kế lớp User mô tả thông tin của một người dùng:

    Thuộc tính name có kiểu dữ liệu string thể hiện tên của người dùng, mức độ truy cập protected
    Thuộc tính email có kiểu dữ liệu string thể hiện email của người dùng, mức độ truy cập protected
    Thuộc tính role kiểu dữ liệu int thể hiện quyền của người dùng, giá trị 1 trương ứng với admin, 2 tương ứng với user,
    mức độ truy cập public
    Có phương thức getInfo() trả về thông tin của người dùng
    Có phương thức isAdmin() kiểm tra nếu role bằng 1 hiển thị "là admin", nếu role bằng 2 hiển thị "là người dùng bình thường"
    Cài đặt setter cho các thuộc tính
*/
enum Role{
    admin = 1,
    user
}
class User{
    protected name: string;
    protected email : string
    public role : Role

    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo(){
        return [this.name,this.email,this.role]
    }
    isAdmin(){
        if(this.role===2){
            console.log('is user')
        } else{
            console.log('is admin')
        }
    }
}

let bro = new User('bro','a',2)
console.log(bro.getInfo())
bro.isAdmin()