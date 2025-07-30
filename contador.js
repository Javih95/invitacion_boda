
  function actualizarContador() {
    const evento = new Date("2025-10-11T00:00:00");
    const ahora = new Date();
    const diferencia = evento - ahora;

    if (diferencia <= 0) {
      document.getElementById("contador").innerText = "¡Es hoy!";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);

    document.getElementById("contador").innerText = `Faltan ${dias} días y ${horas} horas`;
  }

  actualizarContador();
  setInterval(actualizarContador, 60 * 1000); // actualiza cada minuto