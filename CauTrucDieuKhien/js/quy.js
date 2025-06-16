let thang = parseInt(prompt("Nhap vào 1 tháng trong năm(1-12):"));
if (!isNaN(thang) && thang >= 1 && thang <= 12) {
  if (thang >= 1 && thang <= 3) {
    console.log(`Thang ${thang} là quý 1`);
  } else if (thang >= 4 && thang <= 6) {
    console.log(`Thang ${thang} là quý 2`);
  } else if (thang >= 7 && thang <= 9) {
    console.log(`Thang ${thang} là quý 3`);
  } else {
    console.log(`Thang ${thang} là quý 4`);
  }
} else {
  console.log("Tháng không hợp lệ, Vui lòng nhập từ tháng 1 tới tháng 12!");
}
