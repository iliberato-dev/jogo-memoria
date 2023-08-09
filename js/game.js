const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'ariel',
    'bela',
    'elsa',
    'moana',
    'cinderela',
    'jasmine',
    'bela-adormecida',
    'branca-de-neve',
    'rapunzel',
    'tiana',
];

//função para criar elementos e classes/id
const createElement = (tag, className) => {
    const element =document.createElement(tag);
    element.className = className;
    return element;
}


//FUNÇÃO PARA CRIAR CARDS

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 20) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu Tempo foi: ${timer.innerHTML}Segundos.`);
    }
}
//Função para checar se as cartas sao iguai ou diferentes
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    } else {

        setTimeout(() => {
            firstCard.classList.remove('revel-card');
        secondCard.classList.remove('revel-card');

        firstCard = '';
        secondCard = '';
        }, 1500)

        
    }
};

const revealCard = ({target}) => {

    if (target.parentNode.className.includes('revel-card')) {
        return;
    }
    
    if (firstCard === '') {
        target.parentNode.classList.add('revel-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {
        target.parentNode.classList.add('revel-card');
        secondCard = target.parentNode;

        checkCards();
    }
   
}
const createCard = (character) => {
    
     // const card = document.createElement('div'); //cria um elemnto div
    
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    // card.className = 'card'; // adicionando nome de class a div card

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front); //Montando a estrura de cards (inserindo filhos em card)
    card.appendChild(back);
    // grid.appendChild(card); //inserido o .card e o filhos em .grid

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);
    return card;
}

//função para carregar nosso jogo
const loadGame = () => {

    const duplicateCharacters = [ ... characters, ...characters ]; //duplicando a array de personagens

    const shuffledArray = duplicateCharacters.sort(()=> Math.random() -0.5); //metodo para retornar um array embaralhado

    shuffledArray.forEach((character)=> {
       
       const card = createCard(character);
       grid.appendChild(card);

    })
}

const startTimer = () => {
   
    this.loop = setInterval(()=> {
        const currentTime =  +timer.innerHTML;  //Number(timer.innerHTML);
        timer.innerHTML = currentTime + 1;
    },1000)
}

window.onload = () => {
    
    spanPlayer.innerHTML  = localStorage.getItem('player');

    startTimer();    

    loadGame()
}
