const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

// FUNÇÃO PARA ACIONAR O BOTAO JOGAR
const validateInput = ({target}) => {
    if (target.value.length > 2) {
       button.removeAttribute('disabled'); 
       return; //parecido com o else
    } 

    button.setAttribute('disabled', "")
}

// FUNÇÃO PARA GUARDAR O NOME 
const handleSubmit = (event) => {
    event.preventDefault(); //Previne que o submit recaregue a pagina
   
    localStorage.setItem('player', input.value); //Salva a chave player no storage local
    window.location = 'pages/game.html' //Direciona para a nova pagina do game
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);