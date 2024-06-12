document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        const itemList = carousel.querySelector('div:first-of-type');
        const items = itemList.children;
        const totalItems = items.length;
        const itemsPerPage = 4;
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -(currentIndex * 100) / itemsPerPage;
            itemList.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < totalItems / itemsPerPage - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % Math.ceil(totalItems / itemsPerPage);
            updateCarousel();
        }, 4000);
    });

    const appointmentForm = document.getElementById('appointmentForm');
    const appointmentConfirmation = document.getElementById('appointmentConfirmation');
    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        appointmentConfirmation.innerHTML = `Serviço ${service} agendado para ${date} às ${time}.`;
    });

    const contactForm = document.getElementById('contactForm');
    const contactConfirmation = document.getElementById('contactConfirmation');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        contactConfirmation.innerHTML = `Obrigado, ${name}. Entraremos em contato em breve.`;
    });
});
