let yourname;
yourname = prompt("Nhập đầy đủ họ và tên");
console.log("chào mừng bạn " + yourname);

// kiểu dữ liệu
let mystring = "Vũ Quang Duy";
console.log(mystring);
console.log(typeof mystring);
// kiểu number
let diemtoan = "100";
console.log("điểm toán của Vũ Quang Duy là:" + diemtoan);
// kiểu boolean
let check = false;

console.log(check);
console.log(typeof check);

// kiểu undefined
let diemvan;
console.log(diemvan);

let dienanh = null;
console.log(typeof null === "object");
let a = 3;
b = 5;
c = 6;
tong = a + b + c;
tich = a * b * c;
thuong = a / c;
soDu = b % a;
console.log("Thương số a / c là: %s", thuong);
console.log("tong của 3 số a + b + c là: " + tong);
console.log(`Tích 3 số a * b * c là: ${tich} `);
console.log("số dư của phép chia a cho b là: " + soDu);
