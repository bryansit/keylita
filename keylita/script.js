function checkPassword() {
    const passwordInput = document.getElementById('password');
    let password = passwordInput.value.trim();

    // Normalize input (e.g., accept '23/9/2025', '23-09-2025', '23 / 09 / 2025')
    password = password.replace(/[-\/\s]/g, '/'); // Replace dashes or spaces with slashes
    const parts = password.split('/');
    if (parts.length === 3) {
        password = `${parts[0].padStart(2, '0')}/${parts[1].padStart(2, '0')}/${parts[2]}`;
    }

    const correctPassword = '23/09/2025';
    const messageDiv = document.getElementById('message');

    // Clear previous messages
    messageDiv.classList.remove('hidden', 'error');
    messageDiv.textContent = '';

    if (password === correctPassword) {
        // Add a slight delay for a smoother transition on mobile
        messageDiv.textContent = '¡Correcto, mi amor! Redirigiendo...';
        messageDiv.classList.add('success');
        messageDiv.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = 'amor.html';
        }, 1000); // 1-second delay for user feedback
    } else {
        // Show error message in the DOM instead of alert
        messageDiv.textContent = 'Clave incorrecta, mi amor. Intenta de nuevo.';
        messageDiv.classList.add('error', 'hidden');
        setTimeout(() => {
            messageDiv.classList.remove('hidden');
        }, 100); // Brief delay to trigger fade-in effect
        passwordInput.focus(); // Refocus input for easy retry
    }
}