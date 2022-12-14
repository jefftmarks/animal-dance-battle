// ---------- Global Variables ----------

const startBtn = document.getElementById('start-btn');
const instructionText = document.getElementById('instruction-text');
const tournamentDisplay = document.getElementById('tournament');
const vsDisplay = document.getElementById('versus');
const vsLeft = document.getElementById('vs-left');
const vsRight = document.getElementById('vs-right');
const matchInstructions = document.querySelector('#vs-instructions h3')
const bracket = document.getElementById('bracket');
const statsContainer = document.querySelector('#stats-container')

const statsList = document.querySelector('.stats');
const nameStat = document.querySelector('.stats-name');
const habitatStat = document.querySelector('.stats-habitat');
const dietStat = document.querySelector('.stats-diet');
const moveStat = document.querySelector('.stats-dancemove');
const danceMoves = ['Boogie', 'Hustle', 'Tango', 'Waltz', 'Stomp', '2-Step', 'Shuffle', 'Get-Down', 'Wiggle', 'Shake', 'Swim', 'Split', 'Trot', 'Hop', 'Twist', 'Shimmy', 'Salsa', 'Stroll', 'Mambo', 'Cha-Cha', 'Strut'];

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
let counter = 1; //used to populate initial bracket and create animal objects
let game = 1; //used to keep track of how many matches have been played
let round = 0; //used to keep track of which round the tournament is currently in
statsOn = false; //used to keep track of whether stats are currently being displayed/whether pressing enter will currently select a match winner.

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

// Start Button to Launch Rounds.  Hides the bracket and shows the head to head rounds.  The correct animals are displayed based on the 'round' tracker.
startBtn.addEventListener('click', () => {
    if (round === 0) {
        setupR1();
        instructionText.innerText = 'Let the tournament begin!\nClick the disco ball to start Round One';
        round++;
    } else if (round === 1) {
        tournamentDisplay.style.display = 'none';
        vsDisplay.style.display = 'block';
        statsList.style.display = 'none';
        vsLeft.style.display = 'block';
        vsRight.style.display = 'block';
        vsLeft.src = animal1.image_link;
        vsRight.src = animal2.image_link;
    } else if (round === 2) {
        tournamentDisplay.style.display = 'none';
        vsDisplay.style.display = 'block';
        statsList.style.display = 'none';
        vsLeft.src = quartersWinner1.image_link;
        vsRight.src = quartersWinner2.image_link;
    } else if (round === 3) {
        tournamentDisplay.style.display = 'none';
        vsDisplay.style.display = 'block';
        statsList.style.display = 'none';
        vsLeft.src = semisWinner1.image_link;
        vsRight.src = semisWinner2.image_link;
    }
});

// Select Winner (Left & Right).  Determines which animal advances based on which one is clicked most recently.  The correct animal is sent to the next round based on the 'game' counter.

// Left
vsLeft.addEventListener('click', () => {
    if (game!== 8) {
        displayStatsL();
        statsList.style.display = 'block';
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
    }
})

// Right
vsRight.addEventListener('click', () => {
    if (game !== 8) {
        displayStatsR();
        statsList.style.display = 'block';
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
    }
})

// Hover to Trigger Dance on VS Dancer
vsLeft.addEventListener('mouseover', () => {
    vsLeft.style.animationName = 'dance-2';
})

vsLeft.addEventListener('mouseout', () => {
    vsLeft.style.animationName = '';
})

vsRight.addEventListener('mouseover', () => {
    vsRight.style.animationName = 'dance-3';
})

vsRight.addEventListener('mouseout', () => {
    vsRight.style.animationName = '';
})


// Submit Winner and Trigger Next Game
//Pressing enter while a winner is selected (depending on the 'statsOn' tracker) will trigger the next match to start and send the winning animal to the next round or display the bracket (depending on the 'game' variable).
document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        if ((vsDisplay.style.display = 'block' && statsOn === true) || (game === 8)) {
            game++;
            statsOn = false
            vsLeft.style.display = 'block';
            vsRight.style.display = 'block';
            statsContainer.style.display = 'none';
            statsList.style.display = 'none';
            matchInstructions.innerText = "Click on an animal to show its stats!"

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
                instructionText.innerText = 'The competition is stiff!\nClick the disco ball to start Round Two';
                startR2();
                round++;
            } else if (game === 6) {
                vsLeft.src = quartersWinner3.image_link;
                vsRight.src = quartersWinner4.image_link;
            } else if (game === 7) {
                tournamentDisplay.style.display = 'block';
                vsDisplay.style.display = 'none';
                instructionText.innerText = 'We\'re down to the final two!\nClick the disco ball to start the Final Round';
                startR3();
                round++;
            } else if (game === 8) {
                document.getElementById('dancing-gifs').style.display = 'inline-flex';
                if (champ === semisWinner1) {
                    vsRight.style.display = 'none';
                    vsLeft.style.animationName = 'dance-4'
                    matchInstructions.innerText = 'Gaze upon your CHAMPION!\nPress Enter to play again!';
                } else if (champ === semisWinner2) {
                    vsLeft.style.display = 'none';
                    vsRight.style.animationName = 'dance-4'
                    matchInstructions.innerText = 'Gaze upon your CHAMPION!\nPress Enter to play again!';
                }
                //restarts the game with the first round bracket already populated with new animals.
            } else if (game === 9) {
                tournamentDisplay.style.display = 'block';
                vsDisplay.style.display = 'none';
                game = 1;
                counter = 1;
                round = 1;
                resetBracket();
                setupR1();
                instructionText.innerText = 'New dancers have entered the arena!\nClick the disco ball to start Round One';
            }
        }
    }
})


// Populate Rounds

function assignDancer(dancer) {
    const div = document.getElementById(`div-${counter}`);
    const dancerImage = document.createElement('img');
    dancerImage.src = dancer.image_link;
    div.append(dancerImage);

    setAnimation(div);

    counter++;
}
//creates an object for each animal and assigns them a random dance move based on their name.
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
//populates the appropriate spots on the bracket
//Round 2
function startR2() {
    const dancer9 = document.createElement('img');
    dancer9.src = quartersWinner1.image_link;
    div9.append(dancer9);
    setAnimation(div9);

    const dancer10 = document.createElement('img');
    dancer10.src = quartersWinner2.image_link;
    div10.append(dancer10);
    setAnimation(div10);

    const dancer11 = document.createElement('img');
    dancer11.src = quartersWinner3.image_link;
    div11.append(dancer11);
    setAnimation(div11);

    const dancer12 = document.createElement('img');
    dancer12.src = quartersWinner4.image_link;
    div12.append(dancer12);
    setAnimation(div12);
}
//Round 3
function startR3() {
    const dancer13 = document.createElement('img');
    dancer13.src = semisWinner1.image_link;
    div13.append(dancer13);
    setAnimation(div13);

    const dancer14 = document.createElement('img');
    dancer14.src = semisWinner2.image_link;
    div14.append(dancer14);
    setAnimation(div14);
}
// functions to reset the bracket to start a new tournament
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

    disableAnimation(div1);
    disableAnimation(div2);
    disableAnimation(div3);
    disableAnimation(div4);
    disableAnimation(div5);
    disableAnimation(div6);
    disableAnimation(div7);
    disableAnimation(div8);
    disableAnimation(div9);
    disableAnimation(div10);
    disableAnimation(div11);
    disableAnimation(div12);
    disableAnimation(div13);
    disableAnimation(div14);
}


// ---------- Show Stats ----------


//show animal stats

//shows the stats of the animal on the left depending on game counter
function showStats1() {
    statsList.style.display = 'block';
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
        moveStat.innerText = `Signature Dance Move: ${quartersWinner1.sigDanceMove}`
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
//shows the stats of the animal on the right depending on game counter
function showStats2() {
    statsList.style.display = 'block';
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
//toggle stats display
//toggles between displaying the stats for the animal clocked on/showing animal's opponent.  Also toggles displayed instructions.  Next match can only be initiated if an animal is currently selected (based on statsOn tracker).
function displayStatsL() {
if (statsOn === false) {
    showStats1();
    vsRight.style.display = 'none';
    statsContainer.style.display = 'flex';
    //disables functionality if a winner has been chosen.
    if (game < 8) {
        if(game === 7) {
            matchInstructions.innerText = "Press enter to choose the Champion!"
        }
        else {matchInstructions.innerText = "Click the animal again to hide stats. Press enter to lock in the winner"
        }
    }
    statsOn = true;
}
else if (statsOn === true) {
    matchInstructions.innerText = "Click on an animal to show its stats!"
    vsRight.style.display = 'block';
    statsContainer.style.display = 'none';
    statsOn = false;
}
}

function displayStatsR() {
    if (statsOn === false) {
        showStats2();
        vsLeft.style.display = 'none';
        statsContainer.style.display = 'flex';
        if (game < 8) {
            if(game === 7) {
                matchInstructions.innerText = "Press enter to choose the Champion!"
            }
            else {matchInstructions.innerText = "Click the animal again to hide stats. Press enter to lock in the winner"
            }
        }
        statsOn = true;
    }
    else if (statsOn === true) {
        matchInstructions.innerText = "Click on an animal to show its stats!"
        vsLeft.style.display = 'block';
        statsContainer.style.display = 'none';
        statsOn = false;
    }
}
//upon creating animal object, assigns a signature dance move to the animal based on its name and an array of dance moves
function danceMoveGenerator(name, danceMove) {
    const rawName = name.split(' ').slice(-1)[0];
    const nameArray = rawName.split('');
    nameArray[0] = nameArray[0].toUpperCase();
    const titleCaseName = nameArray.join('');

    return `${titleCaseName} ${danceMove[Math.floor(Math.random() * 20) + 1]}`
}



// ---------- Animation ----------

function setAnimation(div) {
    if (div.getAttribute('animation-id') === 'animation-1') {
        div.style.animationDuration = '1s';
    } else if (div.getAttribute('animation-id') === 'animation-2') {
        div.style.animationDuration = '2s';
    }
}

function disableAnimation(div) {
    div.style.animationDuration = '0s';
}