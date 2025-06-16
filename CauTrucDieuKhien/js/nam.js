let nam = Number(prompt("Nhap nam:"));
console.log(nam);
// ((nam %4 ===0) && (nam %100 !==0)) ||(nam %400 ===0)
if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  console.log("La nam nhuan");
} else {
  console.log("Khong phai nam nhuan");
}
