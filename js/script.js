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
    //Creo i due numeri ramdomici tra 1 e 6
    const playerNumber = Math.floor(Math.random() * 6) + 1;
    const computerNumber = Math.floor(Math.random() * 6) + 1;

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

//ESERCIZIO 2
//Creo la lista di emails
const emails = [
    'mgreen@msn.com',
    'rhialto@sbcglobal.net',
    'cyrus@aol.com',
    'magusnet@live.com',
    'pkplex@sbcglobal.net',
    'emiliano@gmail.com',
    'ingolfke@comcast.net',
    'bruck@hotmail.com',
    'dinther@msn.com',
    'cgcra@aol.com',
    'dvdotnet@hotmail.com',
    'boomzilla@yahoo.com',
    'thassine@hotmail.com'
];

//recupero l'input e alert

const email = document.getElementById('email');
const alertDanger = document.getElementById('alertdanger');
const alertSuccess = document.getElementById('alertsuccess');
const controllButton = document.getElementById('controll-btn');


controllButton.addEventListener('click', function () {

    // recupero il valore della email
    const userEmail = email.value;

    // creo una variabile per capire se la email c'è no meno
    let valid = false;

    //ricerco la email
    for (let i = 0; i < emails.length; i++) {
        if (emails[i] === userEmail) {
            valid = true;
            i = emails.length; //nel caso in cui l'email c'è forzo il blocco
        }
    }

    //decido quale alert far apparire a schermo
    if (valid) {
        alertSuccess.classList.remove('d-none');
        alertDanger.classList.add('d-none');

    } else if (!valid) {
        alertSuccess.classList.add('d-none');
        alertDanger.classList.remove('d-none');
    }
})