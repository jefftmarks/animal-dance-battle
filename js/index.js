// ---------- Global Variables ----------

const startBtn = document.getElementById('start-btn');
const tournamentDisplay = document.getElementById('tournament');
const vsDisplay = document.getElementById('versus');
const vsLeft = document.getElementById('vs-left');
const vsRight = document.getElementById('vs-right');
const vsBtn = document.getElementById('vs-btn');
const bracket = document.getElementById('bracket');
const nameStat = document.querySelector('.stats-name')
const habitatStat = document.querySelector('.stats-habitat')
const dietStat = document.querySelector('.stats-diet')
const moveStat = document.querySelector('.stats-dancemove')
const danceMoves = ['Boogie', 'Hustle', 'Tango', 'Waltz', 'Stomp', '2-Step', 'Shuffle', 'Get-Down', 'Wiggle', 'Shake', 'Swim', 'Split', 'Trot', 'Hop']

const div1 = document.getElementById('div-1');
const div2 = document.getElementById('div-2');
const div3 = document.getElementById('div-3');
const div4 = document.getElementById('div-4');
const div5 = document.getElementById('div-5');
const div6 = document.getElementById('div-6');
const div7 = document.getElementById('div-7');
const div8 = document.getElementById('div-8');
const div9 = document.getElementById('div-9');
const div10 = document.getElementById('div-10');
const div11 = document.getElementById('div-11');
const div12 = document.getElementById('div-12');
const div13 = document.getElementById('div-13');
const div14 = document.getElementById('div-14');

// ---------- Trackers ----------

let counter = 1;
let game = 1;

let quartersWinner1;
let quartersWinner2;
let quartersWinner3;
let quartersWinner4;
let semisWinner1;
let semisWinner2;
let champ;

let animal1 = {};
let animal2 = {};
let animal3 = {};
let animal4 = {};
let animal5 = {};
let animal6 = {};
let animal7 = {};
let animal8 = {};


// ---------- Event Listners ----------

// Start Button to Launch Rounds
startBtn.addEventListener('click', () => {
    if (startBtn.innerText === 'Click to Start Tournament') {
        setupR1();
        startBtn.innerText = 'Click to Start Round 1';
    } else if (startBtn.innerText === 'Click to Start Round 1') {
        tournamentDisplay.style.display = 'none';
        vsDisplay.style.display = 'block';
        vsLeft.src = animal1.image_link;
        vsRight.src = animal2.image_link;
        vsBtn.disabled = true;
    } else if (startBtn.innerText === 'Click to Start Round 2') {
        tournamentDisplay.style.display = 'none';
        vsDisplay.style.display = 'block';
        vsLeft.src = quartersWinner1.image_link;
        vsRight.src = quartersWinner2.image_link;
        vsBtn.disabled = true;
    } else if (startBtn.innerText === 'Click to Start Championship Round!') {
        tournamentDisplay.style.display = 'none';
        vsDisplay.style.display = 'block';
        vsLeft.src = semisWinner1.image_link;
        vsRight.src = semisWinner2.image_link;
        vsBtn.innerText = 'Choose Champion!';
        vsBtn.disabled = true;
    }
});

// Select Winner (Left & Right)

// Left
vsLeft.addEventListener('click', () => {
    vsLeft.style.border = '3px solid #40f022';
    vsRight.style.border = '';
    vsLeft.style.opacity = '1';
    vsRight.style.opacity = '0.2';
    vsBtn.disabled = false;

    if (game === 1) {
        quartersWinner1 = animal1;
    } else if (game === 2) {
        quartersWinner2 = animal3;
    } else if (game === 3) {
        quartersWinner3 = animal5;
    } else if (game === 4) {
        quartersWinner4 = animal7;
    } else if (game === 5) {
        semisWinner1 = quartersWinner1;
    } else if (game === 6) {
        semisWinner2 = quartersWinner3;
    } else if (game === 7) {
        champ = semisWinner1;
    }
})

// Right
vsRight.addEventListener('click', () => {
    vsRight.style.border = '3px solid #40f022';
    vsLeft.style.border = '';
    vsRight.style.opacity = '1';
    vsLeft.style.opacity = '0.2';
    vsBtn.disabled = false;

    if (game === 1) {
        quartersWinner1 = animal2;
    } else if (game === 2) {
        quartersWinner2 = animal4;
    } else if (game === 3) {
        quartersWinner3 = animal6;
    } else if (game === 4) {
        quartersWinner4 = animal8;
    } else if (game === 5) {
        semisWinner1 = quartersWinner2;
    } else if (game === 6) {
        semisWinner2 = quartersWinner4;
    } else if (game === 7) {
        champ = semisWinner2;
    }
})

// Submit Winner and Trigger Next Game
vsBtn.addEventListener('click', () => {
    game++;
    vsBtn.disabled = true;
    vsLeft.style.border = '';
    vsRight.style.border = '';
    vsLeft.style.opacity = '1';
    vsRight.style.opacity = '1';

    if (game === 2) {
        vsLeft.src = animal3.image_link;
        vsRight.src = animal4.image_link;
    } else if (game === 3) {
        vsLeft.src = animal5.image_link;
        vsRight.src = animal6.image_link;
    } else if (game === 4) {
        vsLeft.src = animal7.image_link;
        vsRight.src = animal8.image_link;
    } else if (game === 5) {
        tournamentDisplay.style.display = 'block';
        vsDisplay.style.display = 'none';
        startBtn.innerText = 'Click to Start Round 2';
        startR2();
    } else if (game === 6) {
        vsLeft.src = quartersWinner3.image_link;
        vsRight.src = quartersWinner4.image_link;
    } else if (game === 7) {
        tournamentDisplay.style.display = 'block';
        vsDisplay.style.display = 'none';
        startBtn.innerText = 'Click to Start Championship Round!';
        startR3();
    } else if (game === 8) {
        if (champ === semisWinner1) {
            vsRight.style.display = 'none';
            vsBtn.disabled = false;
            vsBtn.innerText = 'Play Again?';
        } else if (champ === semisWinner2) {
            vsLeft.style.display = 'none';
            vsBtn.disabled = false;
            vsBtn.innerText = 'Play Again?';
        }
    } else if (game === 9) {
        tournamentDisplay.style.display = 'block';
        vsDisplay.style.display = 'none';
        game = 1;
        counter = 1;
        resetBracket();
        setupR1();
        startBtn.innerText = 'Click to Start Round 1';
    }
})

function setupR1() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/8')
    .then(res => res.json())
    .then(dancers => {
        dancers.forEach(assignDancer);
        animal1 = dancers[0];
        animal2 = dancers[1];
        animal3 = dancers[2];
        animal4 = dancers[3];
        animal5 = dancers[4];
        animal6 = dancers[5];
        animal7 = dancers[6];
        animal8 = dancers[7];
        animal1['sigDanceMove'] = `${danceMoveGenerator(`${animal1.name}`, danceMoves)}`;
        animal2['sigDanceMove'] = `${danceMoveGenerator(`${animal2.name}`, danceMoves)}`;
        animal3['sigDanceMove'] = `${danceMoveGenerator(`${animal3.name}`, danceMoves)}`;
        animal4['sigDanceMove'] = `${danceMoveGenerator(`${animal4.name}`, danceMoves)}`;
        animal5['sigDanceMove'] = `${danceMoveGenerator(`${animal5.name}`, danceMoves)}`;
        animal6['sigDanceMove'] = `${danceMoveGenerator(`${animal6.name}`, danceMoves)}`;
        animal7['sigDanceMove'] = `${danceMoveGenerator(`${animal7.name}`, danceMoves)}`;
        animal8['sigDanceMove'] = `${danceMoveGenerator(`${animal8.name}`, danceMoves)}`;
    })
    
    
}

function startR2() {
    const dancer9 = document.createElement('img');
    dancer9.src = quartersWinner1.image_link;
    div9.append(dancer9);

    const dancer10 = document.createElement('img');
    dancer10.src = quartersWinner2.image_link;
    div10.append(dancer10);

    const dancer11 = document.createElement('img');
    dancer11.src = quartersWinner3.image_link;
    div11.append(dancer11);

    const dancer12 = document.createElement('img');
    dancer12.src = quartersWinner4.image_link;
    div12.append(dancer12);
}

function startR3() {
    const dancer13 = document.createElement('img');
    dancer13.src = semisWinner1.image_link;
    div13.append(dancer13);

    const dancer14 = document.createElement('img');
    dancer14.src = semisWinner2.image_link;
    div14.append(dancer14);
}

function resetBracket() {
    div1.firstChild.remove();
    div2.firstChild.remove();
    div3.firstChild.remove();
    div4.firstChild.remove();
    div5.firstChild.remove();
    div6.firstChild.remove();
    div7.firstChild.remove();
    div8.firstChild.remove();
    div9.firstChild.remove();
    div10.firstChild.remove();
    div11.firstChild.remove();
    div12.firstChild.remove();
    div13.firstChild.remove();
    div14.firstChild.remove();
}

function assignDancer(dancer) {
    const div = document.getElementById(`div-${counter}`);
    const dancerImage = document.createElement('img');
    dancerImage.src = dancer.image_link;
    div.append(dancerImage);
    counter++;
}



// ---------- Show Stats ----------

//show stats event listeners
vsLeft.addEventListener('mouseover', showStats1)
vsRight.addEventListener('mouseover', showStats2)

//show stats handler
function showStats1() {
    if (game === 1) {
        nameStat.innerText = `Name: ${animal1.name}`
        habitatStat.innerText = `Habitat: ${animal1.habitat}`
        dietStat.innerText = `Diet: ${animal1.diet}`
        moveStat.innerText = `Signature Dance Move: ${animal1.sigDanceMove}`

    }
    else if (game === 2) {
        nameStat.innerText = `Name: ${animal3.name}`
        habitatStat.innerText = `Habitat: ${animal3.habitat}`
        dietStat.innerText = `Diet: ${animal3.diet}`
        moveStat.innerText = `Signature Dance Move: ${animal3.sigDanceMove}`
    }
    else if (game === 3) {
        nameStat.innerText = `Name: ${animal5.name}`
        habitatStat.innerText = `Habitat: ${animal5.habitat}`
        dietStat.innerText = `Diet: ${animal5.diet}`
        moveStat.innerText = `Signature Dance Move: ${animal5.sigDanceMove}`
    }
    else if (game === 4) {
        nameStat.innerText = `Name: ${animal7.name}`
        habitatStat.innerText = `Habitat: ${animal7.habitat}`
        dietStat.innerText = `Diet: ${animal7.diet}`
        moveStat.innerText = `Signature Dance Move: ${animal7.sigDanceMove}`
    }
    else if (game === 5) {
        nameStat.innerText = `Name: ${quartersWinner1.name}`
        habitatStat.innerText = `Habitat: ${quartersWinner1.habitat}`
        dietStat.innerText = `Diet: ${quartersWinner1.diet}`
    }
    else if (game === 6) {
        nameStat.innerText = `Name: ${quartersWinner3.name}`
        habitatStat.innerText = `Habitat: ${quartersWinner3.habitat}`
        dietStat.innerText = `Diet: ${quartersWinner3.diet}`
        moveStat.innerText = `Signature Dance Move: ${quartersWinner3.sigDanceMove}`
    }
    else if (game === 7) {
        nameStat.innerText = `Name: ${semisWinner1.name}`
        habitatStat.innerText = `Habitat: ${semisWinner1.habitat}`
        dietStat.innerText = `Diet: ${semisWinner1.diet}`
        moveStat.innerText = `Signature Dance Move: ${semisWinner1.sigDanceMove}`
    }
}

function showStats2() {
    if (game === 1) {
        nameStat.innerText = `Name: ${animal2.name}`
        habitatStat.innerText = `Habitat: ${animal2.habitat}`
        dietStat.innerText = `Diet: ${animal2.diet}`
        moveStat.innerText = `Signature Dance Move: ${animal2.sigDanceMove}`  
    }
    else if (game === 2) {
        nameStat.innerText = `Name: ${animal4.name}`
        habitatStat.innerText = `Habitat: ${animal4.habitat}`
        dietStat.innerText = `Diet: ${animal4.diet}`
        moveStat.innerText = `Signature Dance Move: ${animal4.sigDanceMove}`
    }
    else if (game === 3) {
        nameStat.innerText = `Name: ${animal6.name}`
        habitatStat.innerText = `Habitat: ${animal6.habitat}`
        dietStat.innerText = `Diet: ${animal6.diet}`
        moveStat.innerText = `Signature Dance Move: ${animal6.sigDanceMove}`
    }
    else if (game === 4) {
        nameStat.innerText = `Name: ${animal8.name}`
        habitatStat.innerText = `Habitat: ${animal8.habitat}`
        dietStat.innerText = `Diet: ${animal8.diet}`
        moveStat.innerText = `Signature Dance Move: ${animal8.sigDanceMove}`
    }
    else if (game === 5) {
        nameStat.innerText = `Name: ${quartersWinner2.name}`
        habitatStat.innerText = `Habitat: ${quartersWinner2.habitat}`
        dietStat.innerText = `Diet: ${quartersWinner2.diet}`
        moveStat.innerText = `Signature Dance Move: ${quartersWinner2.sigDanceMove}`
    }
    else if (game === 6) {
        nameStat.innerText = `Name: ${quartersWinner4.name}`
        habitatStat.innerText = `Habitat: ${quartersWinner4.habitat}`
        dietStat.innerText = `Diet: ${quartersWinner4.diet}`
        moveStat.innerText = `Signature Dance Move: ${quartersWinner4.sigDanceMove}`
    }
    else if (game === 7) {
        nameStat.innerText = `Name: ${semisWinner2.name}`
        habitatStat.innerText = `Habitat: ${semisWinner2.habitat}`
        dietStat.innerText = `Diet: ${semisWinner2.diet}`
        moveStat.innerText = `Signature Dance Move: ${semisWinner2.sigDanceMove}`
    }
}

function danceMoveGenerator(name, danceMove) {
    return `${name.split(' ').slice(-1)}` + ' ' + `${danceMove[Math.floor(Math.random() * 14) + 1]}`
}

// //round 1 handlers
// function assignWinner1(e) {
//     quartersWinner1 = e.target.src
// }
// function assignWinner2(e) {
//     quartersWinner2 = e.target.src
// }
// function assignWinner3(e) {
//     quartersWinner3 = e.target.src
// }
// function assignWinner4(e) {
//     quartersWinner4 = e.target.src
// }
// // round 2 handlers
// function assignWinner5(e) {
//     semisWinner1 = e.target.src
// }
// function assignWinner6(e) {
//     semisWinner2 = e.target.src
// }
// //round 3 handler
// function assignWinner6(e) {
//     champ = e.target.src
// }