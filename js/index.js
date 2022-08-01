const startButton = document.querySelector(".start-button")
let counter = 1
let roundOneWinner1;
let roundOneWinner2;
let roundOneWinner3;
let roundOneWinner4;
let roundTwoWinner1;
let roundTwoWinner2;
let champ;
//event listners
startButton.addEventListener('click', () => {
    if (startButton.innerText= 'Start Tournament') {
         setupR1()
        startButton.innerText = "Click to Start Round 1"}
    });

//start-round functions
function setupR1() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/8')
    .then(res => res.json())
    .then(dancers => dancers.forEach(assignDancer))
}

function startR2() {
    document.getElementById('dancer-9').src = roundOneWinner1
    document.getElementById('dancer-10').src = roundOneWinner2
    document.getElementById('dancer-11').src = roundOneWinner3
    document.getElementById('dancer-12').src = roundOneWinner4
}

function startR3() {
    document.getElementById('dancer-13').src = roundTwoWinner1
    document.getElementById('dancer-14').src = roundTwoWinner2

}

function assignDancer(dancer) {
    document.querySelector(`#dancer-${counter}`).src = dancer.image_link;
    counter += 1
}
//round 1 handlers
function assignWinner1(e) {
    roundOneWinner1 = e.target.src
}
function assignWinner2(e) {
    roundOneWinner2 = e.target.src
}
function assignWinner3(e) {
    roundOneWinner3 = e.target.src
}
function assignWinner4(e) {
    roundOneWinner4 = e.target.src
}
// round 2 handlers
function assignWinner5(e) {
    roundTwoWinner1 = e.target.src
}
function assignWinner6(e) {
    roundTwoWinner2 = e.target.src
}
//round 3 handler
function assignWinner6(e) {
    champ = e.target.src
}
