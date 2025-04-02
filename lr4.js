function updateClock() {
    const clockElement = document.getElementById('clock');
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const userInfoElement = document.getElementById('userInfo');
    userInfoElement.textContent = `Ім'я: ${username}, Електронна пошта: ${email}`;
});

setInterval(updateClock, 1000);

updateClock();

document.getElementById('toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});