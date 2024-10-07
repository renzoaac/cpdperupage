// script.js

let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

// Función para mostrar la diapositiva actual
function showSlide(index) {
    if (index >= totalSlides) { slideIndex = 0; }
    if (index < 0) { slideIndex = totalSlides - 1; }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

// Función para avanzar al siguiente slide
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Evento de clic en los puntos
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        slideIndex = parseInt(dot.getAttribute('data-index'));
        showSlide(slideIndex);
    });
});

// Intervalo para el desplazamiento automático
let slideInterval = setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos

// Pausar el carrusel al pasar el mouse
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});
carousel.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Mostrar el primer slide al cargar la página
showSlide(slideIndex);

// script.js

// Función para obtener el número de WhatsApp desde Google Sheets
async function fetchWhatsAppNumber() {
    const apiUrl = 'https://script.google.com/macros/s/AKfycbwWeovkmLcSk7qMJyvnyDUfT1t2nRVdtESmzito1-LQxlGFpC0HM-oMJOvxgxkzMAqC/exec'; // Reemplaza con tu URL de Web App

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error al obtener el número de WhatsApp');
        }
        const data = await response.json();
        return data.whatsapp_number;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Función para actualizar el enlace de WhatsApp
async function updateWhatsAppLink() {
    const phoneNumber = await fetchWhatsAppNumber();
    if (phoneNumber) {
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        const whatsappButton = document.getElementById('whatsapp-button');
        whatsappButton.href = whatsappLink;
    } else {
        // Opcional: Mostrar un mensaje o cambiar el enlace a una página de contacto alternativa
        console.warn('No se pudo actualizar el enlace de WhatsApp.');
    }
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', updateWhatsAppLink);

