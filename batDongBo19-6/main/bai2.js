fetch("https://jsonplaceholder.typicode.com/users")
  .then((ketqua) => ketqua.json)
  .then((data) => {
    console.log("Danh sách người dùng" + data);
  })
  .catch((err) => {
    console.log("Lỗi API" + err);
  });
