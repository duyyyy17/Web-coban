let arr7 = [1, 2, 3, 2, 4];
console.log(arr7);
for (let i = 0; i < arr7; i++) {
  console.log(ar7[i]);
  arr7[i] = arr7[ơi] * 2;
}
console.log(arr7);

//các phương thức mảng
// nối mảng hiện tại với mảng khác và trả về 1 mảng mưới
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [4, 4, 5];
let nemarr = arr1.concat(arr2, arr3);
console.log(nemarr);

// thêm 1 or nhiều phần từ vào cuối mảng gốc
let arr4 = [1, 2, 3];
arr4.push(4, 5);
console.log(arr4);

// thêm 1 phần tử or nhiều phần tử vào đầu mảng gốc
let arr5 = [4, 5, 6];
arr5.unshift(0, 1, 2, 3);
console.log(arr5);

// loại bỏ phần tử cuối cùng của mảng và trả về phần tử đã bị loai bỏ
let arr6 = [1, 2, 3, "nam"];
let removedElement = arr6.pop();
console.log(arr6);
console.log(removedElement);

// loại bỏ phần tử đầu tiên của mảng và trả về phần tử đã bị loại
let arr8 = [1, 2, 3];
let removedElement2 = arr8.shift();
console.log(arr8);
console.log(removedElement2);

//tạo 1 bản sao của mảng
//slice()
let arr9 = [1, 2, 3, 4, 5, 6, 7];
let nemArr = arr9.slice(2, 5);
console.log(arr9);
console.log(nemArr);

// kiểm tra xem 1 mảnh có chứa 1 giá trị cụ thể hay ko
// trả về true nếu có false nếu ko
let arr10 = [1, 2, 3, 4, 55, 6, "nam", "nữ"];
let is = arr10.includes("nam");
console.log(is);

// indexOf(): trả về vị trí index của phần tử xuất hiện lần đầu tiên trong mảng nếu tìm thấy
// trả về -1 nếu ko timf thấy
let arr12 = [1, 2, 3, 4, 55, 6, "nam", "nữ"];
let indexOfElement = arr12.indexOf("nam");
console.log(indexOfElement);

//lastIndexOf : trả về vị trí index của phần tử xuất hiện lần cuối trong mảng nếu tìm thấy
// trả về -1 nếu ko tìm thấy
let arr13 = [1, 2, 3, 2, 4, 55, 6, "nam", "nữ"];
let lastIndexOfElement = arr13.lastIndexOf(2); // muốn giữ lại bản gốc hãy tạo slice trước
console.log(lastIndexOfElement);

// reverse(): đảo ngược thứ tự của các phần tử trong mảng gốc và ko tạo mảng khác
let arr14 = [1, 2, 3, 2, 4, 55, 6, "nam", "nữ"];
arr14.reverse();
console.log(arr14);

// join(): nối các phần tử trong mảng thành chuỗi có kí tự phân tách "seoarator"
let arr15 = [1, 2, 3, 4, 55, 6, "nam", "nữ"];
let string = arr15.join();
let string2 = arr15.join("+");
console.log(string);
console.log(string2);

// splice(): loại nỏ phần tử từ mảng:
let arr20 = [1, 2, 3, 4, 55, 6, "nam", "nữ"];
// arr20.splice(2, 1);
// arr20.splice(3, 2);
// arr20.splice(3, 1, 500); // thay vị trí số 3 là(4)
arr20.splice(3, 0, 139); // ko xóa phần tử và thêm vào trước vị trí
console.log(arr20);

// spread(...) tạo bản sao clone của bảng
let m1 = [1, 2, 3];
m2 = [...m1];
console.log(m2); // m2 là bản sao của m
// thay đổi giá trị m2
m2[1] = 179;
console.log("Mảng m2: " + m2);
console.log("Mảng m1: " + m1);

// truyền đối số vào hàm
function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
let result = sum(...numbers);
console.log(result);

// kết hợp mảng
let m3 = [1, 2, 3];
let m4 = [4, 5, 6];
let conbineM34 = [...m3, ...m4];
console.log(conbineM34);

// tạo mảng mới với thêm phần tử:
let m5 = [1, 2, 3];
let m6 = [...m5, 5, 6];

console.log(m6);
// chuyển iterable thành mảng

let myname = " Quang Duy";
let char = [...myname];
console.log(char);

// check
