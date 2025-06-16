let kg = Number(prompt("Nhập số cân nặng của bạn(kg):"));
let cc = Number(prompt("Nhập chiều cao của bạn(m):"));
let bmi = kg / (cc * cc);
console.log("BMT cua b" + bmi.toFixed(2));
if (bmi < 15) {
  console.log("Thân hình bạn quá gầy!");
} else if (bmi >= 15 && bmi < 16) {
  console.log("Thân hình bạn gầy");
} else if (bmi >= 16 && bmi < 18.5) {
  console.log("Thân hình bạn hơi gầy");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("Thân hình bạn bình thường");
} else if (bmi >= 25 && bmi < 30) {
  console.log("Thân hình bạn hơi béo");
} else if (bmi >= 30 && bmi < 35) {
  console.log("Thân hình bạn béo");
} else if (bmi >= 35) {
  console.log("Thân hình quá béo");
} else {
  console.log("Hãy nhập lại đúng chiều cao và cân nặng");
}
