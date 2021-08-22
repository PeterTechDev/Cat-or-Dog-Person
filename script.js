const userName = prompt('Por favor insita seu nome');

greeting = document.getElementById('greeting').innerHTML += ` ${userName}! 💖`


//CAPTURA todos os elementos que tem a classe e os add em uma lista
const dog = document.querySelectorAll('.dog');
const cat = document.querySelectorAll('.cat');

//Captura os botoes
const catBtn = document.getElementById('btn-cat');
const dogBtn = document.getElementById('btn-dog');

// Função para verificar se Cat ou Dog já tem a classe hide. Para apenas um dos dois serem mostrados de cada vez
//Obs.: O primeiro console log foi adc pois não consigo deixar sem nada ali
const hideDisplay = (pet) => {
    (pet[0].classList.contains('hide')) ? console.log('Todos os pets são anjos') : pet.forEach(element => {element.classList.add('hide')})   
}

// Função para percorrer a lista e remover o classe que a deixa escondida e invocando a função da linha 11 para fazer a verificação
const petDisplay =(petShow, petHide)=>{
    petShow.forEach(element => {
        element.classList.remove('hide')
    });
    hideDisplay(petHide)
}

// Adiciona o evento para invocar a função da linha 16 quando o user 'clicar' nos botoes capturados
//Obs.: Foi criada uma função anônima para invocar a função pois não consegui add os parâmetros de outra forma
catBtn.addEventListener("click", ()=>{petDisplay(cat, dog)})
dogBtn.addEventListener("click", ()=>{petDisplay(dog, cat)})
