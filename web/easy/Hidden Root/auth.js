document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const res = await fetch("users.json");
  const users = await res.json();

  const found = users.find((u) => u.username === username && u.password === password);
  if (found) {
    localStorage.setItem("user", found.username);
    if (found.username === "adminHidden") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  } else {
    alert("Login gagal");
  }
});
