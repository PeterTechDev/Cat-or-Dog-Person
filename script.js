//CAPTURA todos os elementos que tem a classe em uma lista
const dog = document.querySelectorAll('.dog');
const cat = document.querySelectorAll('.cat');

//Captura os botooes
const catBtn = document.getElementById('btn-cat');
const dogBtn = document.getElementById('btn-dog');



const catDisplay =()=>{
        cat.forEach(element => {
            element.classList.toggle('hide')
        });
    }



const dogDisplay =()=> {
    dog.forEach(element => {
        element.classList.toggle('hide')
    });
}

    
    
catBtn.addEventListener("click", catDisplay)
dogBtn.addEventListener("click", dogDisplay)