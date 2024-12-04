let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateCarousel() {
    const offset = -currentIndex * 100; // Desplazamiento horizontal basado en el índice
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1; // Volver al final si estamos en el primer elemento
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1; // Volver al principio si estamos en el último elemento
    updateCarousel();
});
