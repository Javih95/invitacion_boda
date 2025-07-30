const fotos = [
"./imagenes/fondo_index.jpg",
"./imagenes/gift.svg",
"./imagenes/vestido-svg.svg"
];

let indice = 0;

const img = document.getElementById("imagen-carrusel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function mostrarFoto() {
  img.classList.remove("foto-activa");
  img.src = fotos[indice];
  img.classList.add("foto-activa");
}

prevBtn.addEventListener("click", () => {
  indice = (indice - 1 + fotos.length) % fotos.length;
  mostrarFoto();
});

nextBtn.addEventListener("click", () => {
  indice = (indice + 1) % fotos.length;
  mostrarFoto();
});

mostrarFoto();
