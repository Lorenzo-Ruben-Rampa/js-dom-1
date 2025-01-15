// Seleziono l'elemento
const bottone = document.getElementById("#power");
const lampadinaSpenta = document.getElementById("#lampadina");

// Aggiungo il click come evento scatenante
power.addEventListener('click', function() {

if (lampadina.src.includes("white_lamp.png")) {
    // Cambia immagine a lampadina accesa e modifica il testo del bottone
    lampadina.src = 'img/yellow_lamp.png';
    power.textContent = "Spegni";
} else {
    // Cambia immagine a lampadina spenta e modifica il testo del bottone
    lampadina.src = 'img/white_lamp.png';
    power.textContent = "Accendi";
}
});