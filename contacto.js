const btn = document.getElementById('button');
const API_URL = "https://apibodas.onrender.com";
// Habilitar/deshabilitar input de cantidad según checkbox
document.querySelectorAll('input[name="preferencias[]"]').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const inputNumber = checkbox.parentElement.querySelector('input[type="number"]');
    if (inputNumber) inputNumber.disabled = !checkbox.checked;
  });
});

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const checkboxes = document.querySelectorAll('input[name="preferencias[]"]');
  let algunaMarcada = false;
  let valido = true;
  let preferenciasTexto = "";

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      algunaMarcada = true;
      const inputNumber = checkbox.parentElement.querySelector('input[type="number"]');

      if (inputNumber && (inputNumber.value === "" || parseInt(inputNumber.value) <= 0)) {
        alert(`Por favor indicá la cantidad para "${checkbox.value}"`);
        valido = false;
      } else if (inputNumber) {
        preferenciasTexto += `${checkbox.value}: ${inputNumber.value}\n`;
      } else {
        preferenciasTexto += `${checkbox.value}\n`;
      }
    }
  });

  if (!algunaMarcada) {
    alert("Por favor seleccioná al menos una preferencia alimenticia.");
    return;
  }

  if (!valido) return;

  // Guardamos las preferencias y cantidades en el campo oculto
  document.getElementById('preferencias_cantidades').value = preferenciasTexto;

  // 🔹 Procesar momentos seleccionados
  const momentos = document.querySelectorAll('input[name="momentos[]"]:checked');
  let momentosTexto = "";
  momentos.forEach(m => {
    momentosTexto += `${m.value}\n`;
  });
  document.getElementById('momentos_confirmados').value = momentosTexto;

  // Enviar formulario con EmailJS
  btn.value = 'Enviando...';
  const serviceID = 'service_8i7z85g';
  const templateID = 'template_sjchv85';

  emailjs.sendForm(serviceID, templateID, this)
    .then(async () => {
      btn.value = 'Confirmar';
      alert('¡Confirmación enviada!');
      try {
        const idGrupo = document.getElementById("user_grupo").value;
        await fetch(`${API_URL}/api/confirmar`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            idGrupo,
            confirmacion: "CONFIRMADO ✅",
            preferencias: preferenciasTexto,
            momentos: momentosTexto
          })
        });
      } catch (err) {
        console.error("Error enviando confirmación al API:", err);
      }

    }, (err) => {
      btn.value = 'Confirmar';
      alert(JSON.stringify(err));
    });
});
