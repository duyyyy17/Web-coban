ten = prompt("Nhập tên sinh viên:");
tuoi = Number(prompt("Nhập tuổi :"));
diem = Number(prompt("Nhập điểm :"));
let sinhVien = {
  ten: ten,
  tuoi: tuoi,
  diem: diem,
};
function inThongTin(sv) {
  console.log("Tên:", sv.ten);
  console.log("Tuổi:", sv.tuoi);
  console.log("Điểm:", sv.diem);
}

inThongTin(sinhVien);
