const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

window.onscroll = function() {mostrarImagem()};

function mostrarImagem() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("minhaImagem").style.display = "block";
  } else {
    document.getElementById("minhaImagem").style.display = "none";
  }
}

document.getElementById("minhaImagem").onclick = function() {
  document.documentElement.scrollTop = 0;
}