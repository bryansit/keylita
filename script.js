function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '23/09/2025';

    if (password === correctPassword) {
        window.location.href = 'amor.html';
    } else {
        alert('Clave incorrecta, mi amor. Intenta de nuevo.');
    }
}6