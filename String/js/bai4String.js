//bai1
// verse(): đảo ngược thứ tự của các phần tử trong mảng gốc và ko tạo mảng khác
let arr14 = [1, 2, 3, 2, 4, 55, 6, "nam", "nữ"];
arr14.reverse();
console.log(arr14);

//bai3
function hienThiThongTinSinhVien(ten, tuoi, diem) {
  console.log(`Tên: ${ten}
Tuổi: ${tuoi}
Điểm: ${diem}`);
}
hienThiThongTinSinhVien("Nguyễn Văn A", 20, 8.5);

//bai4
function giai(a, b, c) {
  if (a === 0) {
    console.log("Đây không phải phương trình bậc 2!");
    return;
  }
  let denta = b ** 2 - 4 * a * c;
  console.log("Giá trị của denta là:" + denta);
  if (denta < 0) {
    console.log("Phương trình vô nghiệm");
  } else if (denta === 0) {
    let x = -b / (2 * a);
    console.log(`Phuong trình có nghiệm kép: ${x}`);
  } else {
    let x_1 = (-b + denta) / (2 * a);
    let x_2 = (-b - denta) / (2 * a);
    console.log(`Phuong trình có 2 nghiệm phân biệt : ${x_1} và ${x_2}`);
  }
}
giai(1, -3, 2);
