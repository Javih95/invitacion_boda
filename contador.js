function actualizarContador() {
  const evento = new Date("2025-10-11T19:00:00");
  const ahora = new Date();
  const diferencia = evento - ahora;

  const contador = document.getElementById("contador");

  if (diferencia <= 0) {
    contador.innerHTML = "<p>¡Es hoy!</p>";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / (1000)) % 60);

  contador.innerHTML = `
    <div class="unidad">
      <div class="numero">${dias}</div>
      <div class="texto">Días</div>
    </div>
    <span class="separador">:</span>
    <div class="unidad">
      <div class="numero">${horas.toString().padStart(2, '0')}</div>
      <div class="texto">Hs</div>
    </div>
    <span class="separador">:</span>
    <div class="unidad">
      <div class="numero">${minutos.toString().padStart(2, '0')}</div>
      <div class="texto">Min</div>
    </div>
    <span class="separador">:</span>
    <div class="unidad">
      <div class="numero">${segundos.toString().padStart(2, '0')}</div>
      <div class="texto">Seg</div>
    </div>
  `;
}

actualizarContador();
setInterval(actualizarContador, 1000);
