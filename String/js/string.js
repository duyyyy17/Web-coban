// let s6 = prompt("Mời bạn nhập vào chuỗi:");

// console.log(`Ban đã nhập ${s6.length} ký tự`);
// if (s6.length > 20) {
//   console.log(`Ban đã nhập quá ${s6.length - 20} ký tự`);
//   let s7 = s6.slice(0, 20);
//   console.log(`Chuoi sau xử lý: ${s7}`);
// // }

// let s10 = "XIn chào Vinaco";
// console.log(s10.toUpperCase());
// console.log(s10.toLowerCase())"

//replace
// let s10 = "xin xin chào chào cả nhà";
// console.log(s10.replace("xin", "chào"));
// console.log(s10.replace(/xin/g, "chào"));
// let s24 = s10.repeat(2);
// console.log(s24);
//tìm vị trí index trong chuỗi
// let s10 = "abc acbd";
// let s23 = s10.indexOf("n"); // sẽ tìm từ đầu chuỗi
// console.log(s23);
// console.log(s10.indexOf("c", 15)); // tìm từ vị trí chỉ định trong chuỗi

// console.log(s10.startsWith("a"));
// console.log(s10.startsWith("b"));
// console.log(s10.startsWith("bc", 1));
// console.log(s10.endsWith("d"));
// console.log(s10.endsWith("b", 6));

//split

let s10 = " Hoa, Huệ , Tuấn";
let arr = s10.split(",");
console.log(arr);
