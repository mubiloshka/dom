
const imya = prompt("Ismingizni kiriting");


const indeximya = document.getElementById("imyavhtml");

if (imya) {
  indeximya.textContent = imya;
} else {
  indeximya.textContent = "Ism kiritilmadi";
}
