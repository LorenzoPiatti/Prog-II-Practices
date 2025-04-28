const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmar = document.getElementById('confirmar');
const terminos = document.getElementById('terminos');
const form = document.getElementById('registroForm');

const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const errorConfirmar = document.getElementById('errorConfirmar');
const errorTerminos = document.getElementById('errorTerminos');

function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function mostrarError(input, mensaje, errorDiv) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorDiv.textContent = mensaje;
}

function mostrarValido(input, errorDiv) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    errorDiv.textContent = '';
}

nombre.addEventListener('blur', () => {
    if (nombre.value.trim() === '') {
        mostrarError(nombre, 'El nombre es obligatorio.', errorNombre);
    } else if (nombre.value.trim().length < 3) {
        mostrarError(nombre, 'Debe tener al menos 3 caracteres.', errorNombre);
    } else {
        mostrarValido(nombre, errorNombre);
    }
});

email.addEventListener('input', () => {
    if (email.value.trim() === '') {
        mostrarError(email, 'El email es obligatorio.', errorEmail);
    } else if (!validarEmail(email.value)) {
        mostrarError(email, 'Debe ser un email válido.', errorEmail);
    } else {
        mostrarValido(email, errorEmail);
    }
});

password.addEventListener('input', () => {
    if (password.value.trim() === '') {
        mostrarError(password, 'La contraseña es obligatoria.', errorPassword);
    } else if (password.value.length < 6) {
        mostrarError(password, 'Debe tener al menos 6 caracteres.', errorPassword);
    } else {
        mostrarValido(password, errorPassword);
    }
});

confirmar.addEventListener('blur', () => {
    if (confirmar.value !== password.value) {
        mostrarError(confirmar, 'Las contraseñas no coinciden.', errorConfirmar);
    } else {
        mostrarValido(confirmar, errorConfirmar);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Forzar validaciones
    nombre.dispatchEvent(new Event('blur'));
    email.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));
    confirmar.dispatchEvent(new Event('blur'));

    if (!terminos.checked) {
        errorTerminos.textContent = 'Debes aceptar los términos.';
    } else {
        errorTerminos.textContent = '';
    }

    const esValido = document.querySelectorAll('.invalid').length === 0 && terminos.checked;

    if (esValido) {
        alert("¡Registro exitoso!");
        form.reset();
        document.querySelectorAll('input').forEach(input => {
            input.classList.remove('valid', 'invalid');
        });
    }
});