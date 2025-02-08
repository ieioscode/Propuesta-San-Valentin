const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const initialImage = document.getElementById('initial-image');
const noImage = document.getElementById('no-image');
const yesImage = document.getElementById('yes-image');
const question = document.getElementById('question');
const message = document.getElementById('message');
let noCount = 0;

// Frases para cada clic en "No"
const phrases = [
    "Te vas a divertir con tu osito",
    "Vamos a comer rico y juntitos",
    "Te prometo que será inolvidable",
    "¿Cómo le dices no a este osito?",
    "¡Última oportunidad para decir que sí!"
];

// Animación de corazones
function createHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHearts, 300);

yesBtn.addEventListener('click', () => {
    // Oculta la pregunta, la imagen inicial y el botón "No"
    question.classList.add('hidden');
    initialImage.classList.add('hidden');
    noImage.classList.add('hidden');
    noBtn.style.display = 'none';

    // Muestra la imagen de "Sí"
    yesImage.classList.remove('hidden');

    // Cambia el texto del botón "Sí"
    yesBtn.textContent = '¡Sabía que dirías que si! 💖';

    // Deshabilita los botones después de hacer clic en "Sí"
    yesBtn.disabled = true;
    noBtn.disabled = true;

    // Muestra un mensaje final
    message.textContent = "¡Nos vemos en San Valentín Osita Bonita! 💖";
    message.classList.remove('hidden');
});

noBtn.addEventListener('click', () => {
    noCount++;
    if (noCount <= 5) {
        // Oculta la imagen inicial y muestra la imagen de "No"
        initialImage.classList.add('hidden');
        noImage.classList.remove('hidden');

        // Muestra una frase diferente
        message.textContent = phrases[noCount - 1];
        message.classList.remove('hidden');

        // Aumenta el tamaño del botón "Sí"
        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = `${currentSize + 10}px`;

        // Cambia el texto del botón "No" después de 5 clics
        if (noCount === 5) {
            noBtn.style.display = 'none';
            yesBtn.style.width = '100%';
        }
    }
});