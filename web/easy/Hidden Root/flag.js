const user = localStorage.getItem("user");
if (user !== "adminHidden") {
  document.body.innerHTML = "Access Denied";
} else {
  document.body.innerHTML += "<p>CWA{you_found_the_hidden_admin}</p>";
}
