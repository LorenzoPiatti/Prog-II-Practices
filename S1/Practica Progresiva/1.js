function validarNombre() {
  const nombre = document.getElementById('nombre').value;
  const errorElement = document.getElementById('error');

  if (nombre.trim() === '') {
    errorElement.innerHTML = `
      <span>⚠️ El nombre es obligatorio</span>
    `;
    errorElement.style.background = 'black';
  } else {
    errorElement.textContent = '';
  }
}

function validarEmail() {
  const email = document.getElementById('email').value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|edu|org|net)$/i;

  if (!regex.test(email)) {
    document.getElementById('email-error').innerHTML =
      '<span style="color:red">✗ Formato inválido (ej: usuario@dominio.com)</span>';
    document.getElementById('email-error').style.background = 'black';
  }
}

// Limpiar error al escribir
document.getElementById('usuario').addEventListener('input', limpiarError);


// Validar al perder foco
document.getElementById('usuario').addEventListener('blur', function () {
  if (this.value.length < 5) {
    mostrarError('usuario-error', 'Mínimo 5 caracteres');
  }
});


function limpiarError() {
  document.getElementById('usuario-error').textContent = '';
}