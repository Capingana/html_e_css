const hamburguer = document.querySelector("#hamburguer");
const itens = document.querySelector("#itens");

function showMenu() {
  if (itens.style.display == "block") {
    itens.style.display = "none";
    hamburguer.src = "./src/img/menu.png";
  } else {
    hamburguer.src = "./src/img/close.png";
    itens.style.display = "block";
  }
}

// =============================
const changeWidth = () => {
  if (window.innerWidth >= 768) {
    itens.style.display = "block";
    hamburguer.src = "./src/img/close.png";
  } else {
    itens.style.display = "none";
    hamburguer.src = "./src/img/menu.png";
  }
};
