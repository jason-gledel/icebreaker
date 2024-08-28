// script.js


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.carte');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('flipped');
        });

        card.addEventListener('mouseout', () => {
            card.classList.remove('flipped');
        });
    });
});
