document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.enquesta-form');
    if (!form) return;

    // Crear el mensaje de éxito (inicialmente oculto)
    const successMsg = document.createElement('div');
    successMsg.textContent = 'Enquesta enviada correctament';
    successMsg.style.display = 'none';
    successMsg.style.color = '#2e7d32'; // Verde soso
    successMsg.style.fontSize = '0.95em';
    successMsg.style.marginTop = '0.5em';
    successMsg.style.textAlign = 'center';
    successMsg.setAttribute('id', 'enquesta-exit');

    // Insertar el mensaje debajo del botón
    const submitDiv = form.querySelector('div[style*="text-align:center"]');
    if (submitDiv) {
        submitDiv.insertAdjacentElement('afterend', successMsg);
    } else {
        form.appendChild(successMsg);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Limpiar los campos del formulario
        form.reset();
        // Mostrar el mensaje de éxito
        successMsg.style.display = 'block';
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 3000);
    });
});
