document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').innerHTML = `<p>Gracias, ${name}! Tu mensaje ha sido enviado correctamente.</p>`;
    } else {
        document.getElementById('responseMessage').innerHTML = `<p>Por favor, completa todos los campos.</p>`;
    }
});

// Función para abrir el modal de imagen
function openModal(imgId) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    let imageSrc = '';

    // Cambiar la imagen del modal según el ID
    switch (imgId) {
        case 'img1':
            imageSrc = 'https://via.placeholder.com/600';
            break;
        case 'img2':
            imageSrc = 'https://via.placeholder.com/600';
            break;
        case 'img3':
            imageSrc = 'https://via.placeholder.com/600';
            break;
        default:
            break;
    }

    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}
