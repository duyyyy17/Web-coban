let dbt = Number(prompt("Mời bạn nhập điểm: "));
// if (dbt >= 10.0) {
//   console.log("bạn đã đỗ");
// } else {
//   console.log("bạn đã tạch");
// }
if (dbt <= 10 && dbt >= 8) {
  console.log("Bạn đạt học sinh giỏi");
} else if (8 >= dbt >= 6.5) {
  console.log(" Bạn đạt học sinh khá");
} else if (6.5 > dbt >= 5) {
  console.log(" Bạn đạt học sinh khá");
} else if (5 > dbt >= 0) {
  console.log("Bạn đạt học sinh yếu");
} else {
  console.log("Bạn đã nhập sai");
}
