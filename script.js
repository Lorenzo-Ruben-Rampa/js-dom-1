// Seleziono l'elemento
const button = document.getElementById("power");
const lampadina = document.querySelector('#lampOff');

// Aggiungo il click come evento scatenante
button.addEventListener('click', function() {
    const isUno = lampadina.classList.contains("show");

// Imposto condizioni toggle
   if (isUno) {
    lampadina.classList.add("hide");
    lampadina.classList.remove("show");
} else {
    lampadina.classList.add("show");
    lampadina.classList.remove("hide");
}
});
    