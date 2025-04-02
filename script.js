// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('#features > div > div, #benefits > div > div');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('span');

    answer.classList.toggle('hidden');
    icon.textContent = answer.classList.contains('hidden') ? '+' : '-';
}

function startTransition() {
    document.body.classList.add("fade-out"); // Aplica el efecto de salida
    setTimeout(() => {
        window.location.href = "index.html"; // Redirige después de la animación
    }, 1000); // Espera 1s (igual a la duración del fade-out)
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


