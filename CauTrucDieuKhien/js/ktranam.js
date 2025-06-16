let month = parseInt(prompt("Nhập vào 1 tháng (1-12):"));
// giới hạn nhập 12 tháng
if (!isNaN(month) && month >= 1 && month <= 12) {
  if (month === 2) {
    let nam = Number(prompt("Nhap nam:"));
    console.log(nam);

    if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
      console.log(`Tháng 2 năm ${nam} là năm nhuận có 29 ngày`);
    } else {
      console.log(`Tháng 2 năm ${nam} là không phải năm nhuận có 28 ngày`);
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 10) {
    console.log(`Tháng ${month} là tháng có 30 ngày `);
  } else {
    console.log(`Thang ${month} la tháng có 31 ngày`);
  }
} else {
  console.log("Tháng không hợp lệ, Vui lòng nhập lại từ 0-12:");
}
