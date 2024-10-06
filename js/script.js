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

// Función para retroceder al slide anterior
function prevSlide() {
    slideIndex--;
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
setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos

// Mostrar el primer slide al cargar la página
showSlide(slideIndex);
