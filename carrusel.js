const fotos = [
"./imagenes/pareja/1.jpeg",
"./imagenes/pareja/2.jpeg",
"./imagenes/pareja/3.jpeg",
"./imagenes/pareja/4.jpeg",
"./imagenes/pareja/5.jpeg",
"./imagenes/pareja/6.jpeg",
"./imagenes/pareja/7.jpeg",
"./imagenes/pareja/8.jpeg",
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
