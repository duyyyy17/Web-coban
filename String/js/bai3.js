//bai1
function tinhTong(mang) {
  let tong = 0;
  for (let i = 0; i < mang.length; i++) {
    tong += mang[i];
  }
  return tong;
}

let arr = [1, 2, 3, 4, 5];
console.log("Tổng:" + tinhTong(arr));

//bai2
let mangGoc = [1, 2, 3, 4, 5];
let mangBinhPhuong = mangGoc.map(function (so) {
  return so * so;
});

console.log("Mảng bình phương:", mangBinhPhuong);

//bai3
let mangSo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soChan = mangSo.filter(function (so) {
  return so % 2 === 0;
});

console.log("Số chẵn:", soChan);
