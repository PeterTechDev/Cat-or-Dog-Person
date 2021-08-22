//CAPTURA todos os elementos que tem a classe em uma lista
const dog = document.querySelectorAll('.dog');
const cat = document.querySelectorAll('.cat');

//Captura os botoes
const catBtn = document.getElementById('btn-cat');
const dogBtn = document.getElementById('btn-dog');
// const petBtn = document.getElementsByClassName('petBtn');

const check = (pet)=>{
    if(!pet[0].classList.contains('hide')){
        pet.forEach(element => {
            element.classList.add('hide')
        });
    } 
}

const petDisplay =(petDisplay, petHide)=>{
    petDisplay.forEach(element => {
        element.classList.remove('hide')
    });
    check(petHide)
}


catBtn.addEventListener("click", ()=>{petDisplay(cat, dog)})
dogBtn.addEventListener("click", ()=>{petDisplay(dog, cat)})

//Quando apertar o botao gato, add hide aos dogs

// const check = ()=>{
//     if(!dog[0].classList.contains('hide')){
//         dogDisplay()
//     } 
// }
// const check2 = ()=>{
//     if(!cat[0].classList.contains('hide')){
//         catDisplay()
//     } 
// }

// const catDisplay =()=>{
//         cat.forEach(element => {
//             element.classList.toggle('hide')
//         });
//         check()
//         // dogDisplay()
//     }

// const dogDisplay =()=> {
//     dog.forEach(element => {
//         element.classList.toggle('hide')
//     });
//     check2()
// }




// catBtn.addEventListener("click", catDisplay)
// dogBtn.addEventListener("click", dogDisplay)
