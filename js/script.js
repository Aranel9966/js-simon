/*
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono 
e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Gestire l'inserimento dei numeri tramite 5 input diversi.
*/


/*
->crea 5 numeri casuali 
    ->timer 10 secondi e poi nascondi 
->creo 5 imput diversi che compaiono al 11 secondo
->dopo l'inserimento dei numeri 
->controllo di quanti e quali numeri sono stati indocinati
*/

newRandom = [];
let numberRandom = document.getElementById('number-random');
let containerInput = document.getElementById('container-input');
let startEl = document.getElementById('start');

containerInput.style.display='none';
randomNumber();
createInput(containerInput)

let firstInterval = setTimeout(removeNumber,1000);
let secondInterval = setTimeout(displayInput,1000);

startEl.addEventListener('click',function(){
    let userNumber=[];
    // userNumber.push(inputEl)
    console.log(userNumber)

})







////////////////////////////////////////////////////////////////
// function
///////////////////////////////////////////////////////////////


// crea 5 numeri casuali 
function randomNumber() {
    
    newRandom = [];
    
    for(let i = 0; i < 5; i++){

        newRandom.push(Math.floor(Math.random() * (99 - 1 + 1) + 1));
        
    }
    numberRandom.innerHTML=(newRandom)
    return newRandom
    
};

//function che fa apparire gli input
function removeNumber(){
    numberRandom.innerHTML=('')

};

//function che fa apparire gli input
function displayInput(){
    containerInput.style.display='block'

};


function createInput(container) {
    let userNumber=[];

    for(let i = 0; i < 5; i++){

        let inputEl = document.createElement("input");
      
        inputEl.setAttribute("id" , i);
        container.append(inputEl);

    }
    return userNumber
 
};
  
  