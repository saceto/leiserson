function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const dateTimeElement = document.getElementById('dateTime');
    dateTimeElement.textContent = `ТЕКУЩАЯ ДАТА И ВРЕМЯ: ${date} ${time}`;
}

window.onload = updateDateTime;
setInterval(updateDateTime, 1000);
let ms = Date.now();
document.getElementById("demo").innerHTML = ms;