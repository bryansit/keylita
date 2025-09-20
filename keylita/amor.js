document.addEventListener('DOMContentLoaded', () => {
    const cake = document.querySelector('.cake');
    const dots = document.querySelector('.dots');
    const audio = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');

    if (!cake || !dots || !audio || !playButton) {
        console.error('One or more elements not found. Please check your HTML IDs and classes.');
        return;
    }

    // Create cake layers
    for (let i = 0; i < 3; i++) {
        const layer = document.createElement('div');
        layer.classList.add('layer');
        cake.appendChild(layer);
    }

    // Create candle
    const candle = document.createElement('div');
    candle.classList.add('candle');
    const flame = document.createElement('div');
    flame.classList.add('flame');
    candle.appendChild(flame);
    cake.appendChild(candle);

    // Create dots (reduced number for mobile performance)
    const dotCount = window.innerWidth <= 600 ? 15 : 25; // Fewer dots on mobile
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 4}s`;
        dots.appendChild(dot);
    }

    // Audio play button event
    playButton.addEventListener('click', () => {
        if (audio.paused || audio.ended) {
            audio.play()
                .then(() => {
                    playButton.textContent = 'Reproduciendo...';
                    playButton.disabled = true;
                    playButton.style.cursor = 'not-allowed';
                })
                .catch(error => {
                    console.error('Error al intentar reproducir el audio:', error);
                    playButton.textContent = 'Error al Reproducir';
                    setTimeout(() => {
                        playButton.textContent = 'Reproducir Música';
                    }, 2000);
                });
        }
    });

    // Re-enable button when audio ends
    audio.addEventListener('ended', () => {
        playButton.textContent = 'Reproducir Música';
        playButton.disabled = false;
        playButton.style.cursor = 'pointer';
    });
});