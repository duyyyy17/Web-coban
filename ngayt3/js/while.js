// console.log(`xin chào , acv, 123, #%#^`);
// let s1 = `Đầu lòng 2 ngả tố nga
// Thúy Kiều là chị , em là Thúy Vân`;
// console.log(s1);
// console.log(s1[2]);
// let s1Lenght = s1.length;
// console.log(" độ dài chuỗi s1: " + s1Lenght);
// //or console.log(" độ dài chuỗi s12:" + s1.lenght);

// let message = prompt(" Mời nhập vào chuỗi:");
// if (message.length <= 140) {
//   alert(`Bạn dã nhập ${message.length} ký tự!`);
// } else {
//   alert(` Bạn đã nhập quá ${message.length - 140} kí tự`);
// }
// ;

function tong(a, b) {
  return a + b;
}

function hieu(a, b) {
  return a - b;
}

function tich(a, b) {
  return a * b;
}

function thuong(a, b) {
  if (b === 0) return "Không thể chia cho 0";
  return a / b;
}
console.log("Tổng:", tong(4, 2));
console.log("Hiệu:", hieu(4, 2));
console.log("Tích:", tich(4, 2));
console.log("Thương:", thuong(4, 2));
