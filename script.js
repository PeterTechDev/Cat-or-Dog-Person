const dog = document.querySelectorAll('.dog');
const cat = document.querySelectorAll('.cat');

const catBtn = document.getElementById('btn-cat');
const dogBtn = document.getElementById('btn-dog');


catBtn.addEventListener("click", ()=>{
    if (dog[1].classList.contains('hide')){
        cat.forEach(element => {
            element.classList.toggle('hide')
        });
    } 
})

dogBtn.addEventListener("click", ()=>{
    dog.forEach(element => {
        element.classList.toggle('hide')
    });
})

// dog.style.display='none'
// cat.style.display='none'
