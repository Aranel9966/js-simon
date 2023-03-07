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
->controllo di quanti e quali numeri sono stati indovinati
*/

let newRandom = [];
let userNumber = [];
let numberRandom = document.getElementById('number-random');
let containerInput = document.getElementById('container-input');
let startEl = document.getElementById('start');
let resultsEl = document.getElementById('results');

containerInput.style.display='none';
randomNumber();
createInput(containerInput)

let firstInterval = setTimeout(removeNumber,1000);
let secondInterval = setTimeout(displayInput,1000);

// evento che salva i valori in input in un array 
startEl.addEventListener('click',function(){
    userNumber = [];

    for (let i = 0; i < 5; i++) {
        userNumber.push(document.getElementById(i).value);
    }
    
    console.log(userNumber)
    console.log(newRandom)

// for annidato per controllare se i numeri sono uguali
// let nNumberEquals = 0;
    for(let i = 0; i < newRandom.length; i++){
        let number = newRandom[i];

        for(let j=0; j< userNumber.length;j++){
            let numberUser = userNumber[i];
            
            
            if(newRandom == numberUser ){
                // nNumberEquals++
                resultsEl.innerHTML= number
                console.log('giusti')
                
            }else{

                // console.log(number)
            }
        }
        console.log(number)
    
    }
    
})





////////////////////////////////////////////////////////////////
// function
///////////////////////////////////////////////////////////////

//confronta quanti e quali numeri sono stati indovinati
function controlNumber(){
    
}

// crea 5 numeri casuali 
function randomNumber() {
    
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


//function che crea gli input
function createInput(container) {
    
    for(let i = 0; i < 5; i++){

        let inputEl = document.createElement("input");
      
        inputEl.setAttribute("id" , +i);

        container.append(inputEl);
        
    }    
 
};


  
  