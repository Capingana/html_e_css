const itens = document.querySelector("#ListMenu");
const menu = document.querySelector("#menu-hamburguer");
function showMenu() {
  if (itens.style.display == "block") {
    itens.style.display = "none";
    menu.src="./src/img/menu.png";
  } else {
    menu.src="./src/img/close.png";
    itens.style.display = "block";
  }
}

function mudarTamanho() {
  if (window.innerWidth >= 768) {
    itens.style.display = "block";
  } else {
    itens.style.display = "none";
  }
}
