// Seleziono l'elemento
const button = document.getElementById('#power');
const lampadinaSpenta = document.getElementById('#lampOff');
const lampadinaAccesa = document.getElementById('#lampOn');

// Aggiungo il click come evento scatenante
button.addEventListener('click', function on_off() {
// const isUno = lampadinaAccesa.classList.contains("show");

// Imposto condizioni toggle
    lampadinaAccesa.className = ('show');
    lampadinaSpenta.className = ('hide');
});
    