console.log('js ok')

// ESERCIZIO 1

//Recupero il bottone
const playButton = document.getElementById('playbutton');
const resetButton = document.getElementById('resetbutton')
//Recupero i due div dove scrivere i messaggi
let message = document.getElementById('message');
let players = document.getElementById('players')

//Creo un bottone per gioacare
playButton.addEventListener('click', function () {
    //Creo i due numeri ramdomici tra 1 e 10
    const playerNumber = Math.floor(Math.random() * 10) + 1;
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    //Inizializzo il messaggio per il vincitore
    let winner = '';

    //Controllo chi vince o pareggia
    if (playerNumber > computerNumber) {
        winner = 'Vince il Giocatore';
    } else if (playerNumber < computerNumber) {
        winner = 'Vince il Computer';
    } else {
        winner = 'Giocatore e Computer hanno pareggiato';
    }

    //Stampo a schermo i messaggi
    players.innerHTML = `Il <u>Giocatore</u> ha fatto <strong>${playerNumber}</strong>, il <u>Computer</u> ha fatto <strong>${computerNumber}</strong>`;
    message.innerText = winner;
})
resetButton.addEventListener('click', function () {
    message.innerText = ' ';
    players.innerText = ' ';
})

//