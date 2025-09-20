document.addEventListener('DOMContentLoaded', () => {
    const cake = document.querySelector('.cake');
    const dots = document.querySelector('.dots');
    const audio = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');

    if (!cake || !dots || !audio || !playButton) {
        console.error('One or more elements not found. Please check your HTML IDs and classes.');
        return;
    }

    // Crear las capas de la torta
    for (let i = 0; i < 3; i++) {
        const layer = document.createElement('div');
        layer.classList.add('layer');
        cake.appendChild(layer);
    }

    // Crear la vela
    const candle = document.createElement('div');
    candle.classList.add('candle');
    const flame = document.createElement('div');
    flame.classList.add('flame');
    candle.appendChild(flame);
    cake.appendChild(candle);

    // Crear puntos decorativos
    for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 4}s`;
        dots.appendChild(dot);
    }

    // Evento para el botón de reproducir
    playButton.addEventListener('click', () => {
        // Verifica si el audio está en pausa o ha terminado
        if (audio.paused || audio.ended) {
            audio.play()
                 .then(() => {
                     // La reproducción se inició correctamente
                     playButton.textContent = 'Reproduciendo...';
                     playButton.disabled = true; // Deshabilita el botón para evitar clics múltiples
                     playButton.style.cursor = 'not-allowed';
                 })
                 .catch(error => {
                     // El usuario no interactuó o hubo otro error
                     console.error("Error al intentar reproducir el audio:", error);
                 });
        }
    });

    // Opcional: Volver a habilitar el botón si el audio termina
    audio.addEventListener('ended', () => {
        playButton.textContent = 'Reproducir Música';
        playButton.disabled = false;
        playButton.style.cursor = 'pointer';
    });
});