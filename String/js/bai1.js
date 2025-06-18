const chuoi = prompt("Nhập vào 1 chuỗi kí tự từ bàn phím:");
let chuThuong = 0;
let chuHoa = 0;
let so = 0;
let space = 0;

for (let i = 0; i < chuoi.length; i++) {
  let char = chuoi[i];
  if (char >= "a" && char <= "z") {
    chuThuong++;
  } else if (char >= "A" && char <= "Z") {
    chuHoa++;
  } else if (char >= "0" && char <= "9") {
    so++;
  } else if (char === " ") {
    space++;
  }
}
console.log(" Số ký tự hoa" + chuHoa);
console.log(" Số ký tự thường" + chuThuong);
console.log(" Số ký tự số" + so);
console.log(" Số ký tự space" + space);
