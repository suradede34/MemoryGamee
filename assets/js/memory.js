let data = [1, 2, 3, 4, 5, 6, 7, 8];

data = data.concat(data);
console.log(data);
data.sort(() => Math.random() - 0.5); 
console.log(data);

for (const x of data) {
    console.log(x);
    document.querySelector('.game').innerHTML += `<div class="game-item">${x}</div>`;
}

let firstSelected = null;
let secondSelected = null;
let matchedItems = 0;

function handleItemClick() {
    if (this.classList.contains('game-item-active') || firstSelected === this || secondSelected === this) {
        return;
    }
    this.classList.add('game-item-active'); 
    if (!firstSelected) {
        firstSelected = this; 
        return;
    }
    secondSelected = this; 

    if (firstSelected.textContent === secondSelected.textContent) {
        matchedItems++; 
        firstSelected = null;
        secondSelected = null;
    } else {
        setTimeout(() => {
            firstSelected.classList.remove('game-item-active');
            secondSelected.classList.remove('game-item-active');
            firstSelected = null;
            secondSelected = null;
        }   , 400); //burada yaptigim saniyelik tiklama islemini geri almak yardim aldim bu kisimda
    }
}

const items = document.querySelectorAll('.game-item');
for (const item of items) {
    item.addEventListener('click', handleItemClick);
}

function newGame() {
    data.sort(() => Math.random() - 0.5);
    document.querySelector('.game').innerHTML = ''; 
    matchedItems = 0;
    firstSelected = null;
    secondSelected = null;

    for (const x of data) {
        document.querySelector('.game').innerHTML += `<div class="game-item">${x}</div>`;
    }
    
    const newItems = document.querySelectorAll('.game-item');
    for (const item of newItems) {
        item.addEventListener('click', handleItemClick);
    }
}

function restartGame() {
    const items = document.querySelectorAll('.game-item');
    items.forEach(item => {
        item.classList.remove('game-item-active', 'game-item-wrong');
    });
    firstSelected = null;
    secondSelected = null;
    matchedItems = 0;
}
document.getElementById('restartBtn').addEventListener('click', restartGame);
document.getElementById('newGameBtn').addEventListener('click', newGame);

