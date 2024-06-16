document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const trashes = document.querySelectorAll('.trash');
    const message = document.getElementById('message');
    const trashCounter = document.getElementById('trashCounter');
    let trashCount = 0;

    trashes.forEach(trash => {
        trash.addEventListener('click', () => {
            moveToTrash(character, trash, message, incrementTrashCount);
        });
    });

    function incrementTrashCount() {
        trashCount++;
        trashCounter.textContent = `Basuras recogidas: ${trashCount}`;
        console.log(`Basura recogida: ${trashCount}`);
        if (trashCount === 10) {
            console.log("Mostrando mensaje de felicitaciones");
            showMessage(message);
        }
    }
});

function moveToTrash(character, trash, message, callback) {
    const trashRect = trash.getBoundingClientRect();
    
    const x = trashRect.left + window.scrollX;
    const y = trashRect.top + window.scrollY;

    character.style.left = `${x}px`;
    character.style.top = `${y}px`;

    setTimeout(() => {
        trash.remove();
        callback();
    }, 500); 
}


function showMessage(message) {
    message.classList.remove('hidden');
    message.classList.add('visible');
    setTimeout(() => {
        message.classList.remove('visible');
        message.classList.add('hidden');
        resetPage(); 
    }, 2000); 
}

function resetPage() {
    setTimeout(() => {
        window.location.reload(); 
    }, 3000); 
}

