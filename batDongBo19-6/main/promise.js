fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("user-list");
    container.innerHTML = "";

    data.forEach((user) => {
      const div = document.createElement("div");
      div.className = "user";
      div.innerHTML = `
        <strong> ${user.id} </strong><br>
         ${user.name}<br>
         ${user.email}<br>
         ${user.address.city}
        `;
      container.appendChild(div);
    });
  })
  .catch((err) => {
    document.getElementById("user-list").innerText = "Không thể tải dữ liệu!";
    console.error("Lỗi API:", err);
  });
