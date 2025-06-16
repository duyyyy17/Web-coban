let diem = Number(prompt(" Nhập điểm số:"));
let gioi =
  diem <= 10 && diem >= 8
    ? " Hoc sinh giỏi"
    : diem < 8 && diem >= 6.5
    ? " Học sinh khá"
    : diem < 6.5 && diem >= 5
    ? "Học sinh trung bình"
    : diem < 5 && diem >= 0
    ? "Học sinh yếu"
    : "Số điểm không hợp lệ, vui lòng nhập lại từ 0 - 10";
console.log(gioi);
