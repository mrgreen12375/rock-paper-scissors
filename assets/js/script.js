const playerCard = document.querySelector('#playerCard');
const cpuCard = document.querySelector('#cpuCard');

const playerResults = document.querySelector('#playerResults');
const cpuResults = document.querySelector('#cpuResults');

const versus = document.querySelector('#versus');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const weapons = ["rock", "paper", "scissors"];

let cpuWeapon;

function playerChoice(playerWeapon){
    playerCard.innerHTML = `<img class="player" src="./assets/images/${playerWeapon}.png"/>`;
}

function cpuChoice(){
    const index = Math.floor(Math.random() * weapons.length);
    cpuWeapon = weapons[index];

    cpuCard.innerHTML = `<img class="cpu" src="./assets/images/${cpuWeapon}.png"/>`;
}

function clearPriorWeapon(){
    playerCard.innerHTML = '';
    cpuCard.innerHTML = '';
}

function startGame(playerWeapon){
    clearPriorWeapon();
    playerChoice(playerWeapon);
    cpuChoice();

    if (playerWeapon === cpuWeapon) {
        playerResults.innerHTML = `<h2>Tied</>`
        cpuResults.innerHTML = `<h2>Tied</>`
        versus.setAttribute('style', 'top: 55px;');
      } else if (
        (playerWeapon === "rock" && cpuWeapon === "scissors") || 
        (playerWeapon === "paper" && cpuWeapon === "rock") || 
        (playerWeapon === "scissors" && cpuWeapon === "paper")
      ) {
        playerResults.innerHTML = `<h2>Winner</>`
        cpuResults.innerHTML = `<h2>Loser</>`
        versus.setAttribute('style', 'top: 55px;');
      } else {
        playerResults.innerHTML = `<h2>Loser</>`
        cpuResults.innerHTML = `<h2>Winner</>`      
        versus.setAttribute('style', 'top: 55px;');
      }
}


rock.addEventListener('click', () => startGame("rock"));
paper.addEventListener('click', () =>  startGame("paper"));
scissors.addEventListener('click', () =>  startGame("scissors"));