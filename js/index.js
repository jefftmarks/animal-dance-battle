
let counter = 1
function startR1() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/8')
    .then(res => res.json())
    .then(dancers => dancers.forEach(assignDancer))
}

function assignDancer(dancer) {
    document.querySelector(`#dancer-${counter}`).src = dancer.image_link;
    counter += 1
}

startR1();