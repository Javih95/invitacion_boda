
function verInvitacion() {
  const input = document.getElementById("codigoInput").value.trim().toUpperCase();
  if (invitados[input]) {
    localStorage.setItem("invitado", JSON.stringify(invitados[input]));
    window.location.href = "invitado.html";
  } else {
    document.getElementById("error").textContent = "Código no válido. Verificá tu invitación.";
  }
}
