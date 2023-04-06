let arr = ['1', '2', '3', '4']
let k = 3

/*
phân tích bài toán:
-số đầu tiên trong dãy số con sẽ chỉ chạy từ vị trí 0 đến vị trí arr.length + 1 - k
-hàm calculate sẽ sinh ra các dãy số con từ chữ số đầu tiên được chọn riêng với các bước:
    + chọn chữ số đầu tiên
    + hàm con generate sẽ sinh ra thêm một số để thêm vào đầu sau số đầu tiên đã được chọn
      gọi hàm generate k-1 lần đễ sinh ra k-1 số sau số đầu tiên
-gọi hàm calculate arr.length + 1 - k lần để lấy ra đủ tất cả các trường hợp
*/

function calculate(index) {
    let result = [arr[index]]
    let arrSliced = arr.slice(index + 1, arr.length)

    function generate() {

        let savedResult = []
        result.forEach((e) => {
            savedResult.push(e)
        })


        for (let i = 0; i < savedResult.length; i++) {

            let savedSliced = []
            arrSliced.forEach((e) => {
                savedSliced.push(e)
            })


            for (let j = 0; j < arrSliced.length; j++) {
                result.push(result[i] + arrSliced[0])
                j--
                arrSliced.splice(0, 1)
            }


            savedSliced.forEach((e) => {
                arrSliced.push(e)
            })


            arrSliced.splice(0, 1)
        }

        result.splice(0, savedResult.length)
    }


    for (let i = 0; i < k - 1; i++) {
        generate()
    }
    console.log(result)
}


for (let i = 0; i < arr.length + 1 - k; i++) {
    calculate(i)
}
