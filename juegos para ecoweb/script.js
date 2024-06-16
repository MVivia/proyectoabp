document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const monkey = document.getElementById('monkey');

    container.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        // Mover el monito a la posición del mouse
        monkey.style.left = `${x}px`;
        monkey.style.top = `${y}px`;
        monkey.style.display = 'block';
    });

    container.addEventListener('click', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        // Pausar para simular que el monito está plantando el arbolito
        setTimeout(() => {
            plantTree(x, y);
        }, 100); // Pausa corta para la plantación
    });
});

function plantTree(x, y) {
    const tree = document.createElement('div');
    tree.classList.add('tree');
    tree.style.left = `${x - 25}px`; // Ajuste para centrar el arbolito
    tree.style.top = `${y - 50}px`; // Ajuste para posicionar el arbolito en la base del clic
    document.querySelector('.container').appendChild(tree);
}
