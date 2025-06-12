//tính chu vi và diện tích hình tròn và làn tròn số thập phân

let r = Number(prompt("Nhập bán kính hình tròn:"));
let PI = Math.PI;
console.log(PI);
let chuVi = 2 * PI * r;
let dienTich = PI * r * r;
console.log("Chu vi hình tròn:" + chuVi.toFixed(3));
console.log("Diện tích hình tròn:" + dienTich.toFixed(2));
