let search = Number(
  prompt(`
    Tìm kiếm:
    1. Tìm kiếm theo
    2. Tìm kiếm theo tác giả
    3. Tìm kiếm theo nhà xuất bản
    4. Tìm kiếm theo tiêu đề
    Hãy nhập sự lựa chọn của bạn:
    `)
);
switch (search) {
  case 0:
    alert("Tìm kiếm theo tên");
    break;
  case 1:
    alert("Tìm kiếm theo tác giả");
    break;
  case 3:
    alert("Tìm kiếm theo nhà xuất bản");
    break;
  case 4:
    alert("Tìm kiếm theo tiêu đề");
    break;
  default:
    alert(" Phím bấm không hợp lệ");
}
0;
