let a = Number(prompt("Nhập giá trị a:"));
let b = Number(prompt("Nhập giá trị b:"));
let c = Number(prompt("Nhập giá trị c:"));
console.log(`Gia trị của a: ${a}`);
console.log(`Gia trị của b: ${b}`);
console.log(`Gia trị của c: ${c}`);
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
