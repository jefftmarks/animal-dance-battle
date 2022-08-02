const startButton = document.querySelector(".start-button")
const tournamentDisplay = document.getElementById('tournament')
const versusDisplay = document.getElementById('versus')
const vsDancer1 = document.getElementById('vs-dancer-1')
const vsDancer2 = document.getElementById('vs-dancer-2')
const vsButton = document.getElementById('vs-button')
const bracket = document.querySelector('.bracket');
const nameStat = document.querySelector('.stats-name')
const habitatStat = document.querySelector('.stats-habitat')
const dietStat = document.querySelector('.stats-diet')

let counter = 1
let game = 1

let roundOneWinner1;
let roundOneWinner2;
let roundOneWinner3;
let roundOneWinner4;
let roundTwoWinner1;
let roundTwoWinner2;
let champ;

let animal1 = {};
let animal2 = {};
let animal3 = {};
let animal4 = {};
let animal5 = {};
let animal6 = {};
let animal7 = {};
let animal8 = {};


//event listners

//start round event listener
startButton.addEventListener('click', () => {
    if (startButton.innerText === 'Start Tournament') {
        setupR1()
        startButton.innerText = "Click to Start Round 1"
    } else if (startButton.innerText === 'Click to Start Round 1') {
        tournamentDisplay.style.display = 'none';
        versusDisplay.style.display = 'block';
        vsDancer1.src = animal1.image_link;
        vsDancer2.src = animal2.image_link;
        vsButton.disabled = true;
    } else if (startButton.innerText === 'Click to Start Round 2') {
        tournamentDisplay.style.display = 'none';
        versusDisplay.style.display = 'block';
        vsDancer1.src = roundOneWinner1.image_link;
        vsDancer2.src = roundOneWinner2.image_link;
        vsButton.disabled = true;
    } else if (startButton.innerText === 'Click to Start Championship Round!') {
        tournamentDisplay.style.display = 'none';
        versusDisplay.style.display = 'block';
        vsDancer1.src = roundTwoWinner1.image_link;
        vsDancer2.src = roundTwoWinner2.image_link;
        vsButton.disabled = true;
    }
});

//select winner event listener
vsDancer1.addEventListener('click', () => {
    vsDancer1.style.border = '3px solid red';
    vsDancer2.style.border = '';
    vsButton.disabled = false;
    if (game === 1) {
        roundOneWinner1 = animal1
    } else if (game === 2) {
        roundOneWinner2 = animal3
    } else if (game === 3) {
        roundOneWinner3 = animal5
    } else if (game === 4) {
        roundOneWinner4 = animal7
    } else if (game === 5) {
        roundTwoWinner1 = roundOneWinner1;
    } else if (game === 6) {
        roundTwoWinner2 = roundOneWinner3;
    } else if (game === 7) {
        champ = roundTwoWinner1;
        vsButton.innerText = 'Choose Champion!'
    }
})

vsDancer2.addEventListener('click', () => {
    vsDancer2.style.border = '3px solid red';
    vsDancer1.style.border = '';
    vsButton.disabled = false;
    if (game === 1) {
        roundOneWinner1 = animal2
    } else if (game === 2) {
        roundOneWinner2 = animal4
    } else if (game === 3) {
        roundOneWinner3 = animal6
    } else if (game === 4) {
        roundOneWinner4 = animal8
    } else if (game === 5) {
        roundTwoWinner1 = roundOneWinner2;
    } else if (game === 6) {
        roundTwoWinner2 = roundOneWinner4;
    } else if (game === 7) {
        champ = roundTwoWinner2;
        vsButton.innerText = 'Choose Champion!';
    }
})

//submit winner and next game event listener
vsButton.addEventListener('click', () => {
    ++game
    vsButton.disabled = true;
    vsDancer1.style.border = '';
    vsDancer2.style.border = '';
    if (game === 2) {
        vsDancer1.src = animal3.image_link;
        vsDancer2.src = animal4.image_link;
    } else if (game === 3) {
        vsDancer1.src = animal5.image_link;
        vsDancer2.src = animal6.image_link;
    } else if (game === 4) {
        vsDancer1.src = animal7.image_link;
        vsDancer2.src = animal8.image_link;
    } else if (game === 5) {
        tournamentDisplay.style.display = 'block';
        versusDisplay.style.display = 'none';
        startButton.innerText = "Click to Start Round 2"
        startR2();
    } else if (game === 6) {
        vsDancer1.src = roundOneWinner3.image_link;
        vsDancer2.src = roundOneWinner4.image_link;
    } else if (game === 7) {
        tournamentDisplay.style.display = 'block';
        versusDisplay.style.display = 'none';
        startButton.innerText = "Click to Start Championship Round!"
        startR3();
    } else if (game === 8) {
        if (champ === roundTwoWinner1) {
            vsDancer2.style.display = 'none';
            vsButton.innerText = 'Play Again?';
        } else if (champ === roundTwoWinner2) {
            vsDancer1.style.display = 'none';
            vsButton.innerText = 'Play Again?';
            vsButton.disabled = false;
        }
    } else if (game === 9) {
        tournamentDisplay.style.display = 'block';
        versusDisplay.style.display = 'none';
        game = 1;
        counter = 1;
        setupR1()
        startButton.innerText = "Click to Start Round 1"
    }
})

//show stats event listeners
vsDancer1.addEventListener('mouseover', showStats1)

vsDancer2.addEventListener('mouseover', showStats2)

//start-round functions
function setupR1() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/8')
    .then(res => res.json())
    .then(dancers => {
        dancers.forEach(assignDancer)
        animal1 = dancers[0]
        animal2 = dancers[1]
        animal3 = dancers[2]
        animal4 = dancers[3]
        animal5 = dancers[4]
        animal6 = dancers[5]
        animal7 = dancers[6]
        animal8 = dancers[7]
    })
}

function startR2() {
    document.getElementById('dancer-9').src = roundOneWinner1.image_link
    document.getElementById('dancer-10').src = roundOneWinner2.image_link
    document.getElementById('dancer-11').src = roundOneWinner3.image_link
    document.getElementById('dancer-12').src = roundOneWinner4.image_link
}

function startR3() {
    document.getElementById('dancer-13').src = roundTwoWinner1.image_link
    document.getElementById('dancer-14').src = roundTwoWinner2.image_link

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
//show stats handler
function showStats1() {
    if (game === 1) {
        nameStat.innerText = `Name: ${animal1.name}`
        habitatStat.innerText = `Habitat: ${animal1.habitat}`
        dietStat.innerText = `Diet: ${animal1.diet}`  
    }
    else if (game === 2) {
        nameStat.innerText = `Name: ${animal3.name}`
        habitatStat.innerText = `Habitat: ${animal3.habitat}`
        dietStat.innerText = `Diet: ${animal3.diet}`
    }
    else if (game === 3) {
        nameStat.innerText = `Name: ${animal5.name}`
        habitatStat.innerText = `Habitat: ${animal5.habitat}`
        dietStat.innerText = `Diet: ${animal5.diet}`
    }
    else if (game === 4) {
        nameStat.innerText = `Name: ${animal7.name}`
        habitatStat.innerText = `Habitat: ${animal7.habitat}`
        dietStat.innerText = `Diet: ${animal7.diet}`
    }
    else if (game === 5) {
        nameStat.innerText = `Name: ${roundOneWinner1.name}`
        habitatStat.innerText = `Habitat: ${roundOneWinner1.habitat}`
        dietStat.innerText = `Diet: ${roundOneWinner1.diet}`
    }
    else if (game === 6) {
        nameStat.innerText = `Name: ${roundOneWinner3.name}`
        habitatStat.innerText = `Habitat: ${roundOneWinner3.habitat}`
        dietStat.innerText = `Diet: ${roundOneWinner3.diet}`
    }
    else if (game === 7) {
        nameStat.innerText = `Name: ${roundTwoWinner1.name}`
        habitatStat.innerText = `Habitat: ${roundTwoWinner1.habitat}`
        dietStat.innerText = `Diet: ${roundTwoWinner1.diet}`
    }
}

function showStats2() {
    if (game === 1) {
        nameStat.innerText = `Name: ${animal2.name}`
        habitatStat.innerText = `Habitat: ${animal2.habitat}`
        dietStat.innerText = `Diet: ${animal2.diet}`  
    }
    else if (game === 2) {
        nameStat.innerText = `Name: ${animal4.name}`
        habitatStat.innerText = `Habitat: ${animal4.habitat}`
        dietStat.innerText = `Diet: ${animal4.diet}`
    }
    else if (game === 3) {
        nameStat.innerText = `Name: ${animal6.name}`
        habitatStat.innerText = `Habitat: ${animal6.habitat}`
        dietStat.innerText = `Diet: ${animal6.diet}`
    }
    else if (game === 4) {
        nameStat.innerText = `Name: ${animal8.name}`
        habitatStat.innerText = `Habitat: ${animal8.habitat}`
        dietStat.innerText = `Diet: ${animal8.diet}`
    }
    else if (game === 5) {
        nameStat.innerText = `Name: ${roundOneWinner2.name}`
        habitatStat.innerText = `Habitat: ${roundOneWinner2.habitat}`
        dietStat.innerText = `Diet: ${roundOneWinner2.diet}`
    }
    else if (game === 6) {
        nameStat.innerText = `Name: ${roundOneWinner4.name}`
        habitatStat.innerText = `Habitat: ${roundOneWinner4.habitat}`
        dietStat.innerText = `Diet: ${roundOneWinner4.diet}`
    }
    else if (game === 7) {
        nameStat.innerText = `Name: ${roundTwoWinner2.name}`
        habitatStat.innerText = `Habitat: ${roundTwoWinner2.habitat}`
        dietStat.innerText = `Diet: ${roundTwoWinner2.diet}`
    }
}