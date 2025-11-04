function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Pastikan dataPengguna dari data.js terbaca
  console.log("Cek dataPengguna:", dataPengguna);
  // Cek apakah email dan password cocok
  const user = dataPengguna.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    alert("Login berhasil! Selamat datang, " + user.nama);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password salah!");
  }
}
