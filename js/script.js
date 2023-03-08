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
randomNumber(newRandom);
createInput(containerInput)

let firstInterval = setTimeout(removeNumber,10000);
let secondInterval = setTimeout(displayInput,10000);


// evento che salva i valori in input in un array 
startEl.addEventListener('click',function(){
    userNumber = [];

    for (let i = 0; i < 5; i++) {
        userNumber.push(document.getElementById(i).value);
    }
    
    console.log(userNumber)
    console.log(newRandom)

    controlNumber(newRandom,userNumber)
})





////////////////////////////////////////////////////////////////
// function
///////////////////////////////////////////////////////////////

//confronta quanti e quali numeri sono stati indovinati
function controlNumber(arr1,arr2){
    // for annidato per controllare se i numeri sono uguali
let nNumberEquals = [];
for(let i = 0; i < arr1.length; i++){
    let number = arr1[i];

    for(let j=0; j< arr2.length;j++){
        let numberUser = arr2[j];
        
    console.log(numberUser)
        
        if(number == numberUser ){
            nNumberEquals.push(numberUser)
            
            console.log('okay')
            
        }
        
    }
    console.log(number)

}
console.log(nNumberEquals)
resultsEl.innerHTML=('hai indovinato i numeri: ' + nNumberEquals + '<br> i numeri erano: '+ arr1)
if(nNumberEquals.length==arr1.length){
    resultsEl.innerHTML=('hai vinto')
}

}

// crea 5 numeri casuali 
function randomNumber(arr1) {
    
    for(let i = 0; i < 5; i++){
        arr1.push(Math.floor(Math.random() * (99 - 1 + 1) + 1));
        
    }
    numberRandom.innerHTML=(arr1)
    return arr1
    
};

//function che fa apparire gli input
function removeNumber(){
    numberRandom.innerHTML=('')

};

//function che fa apparire gli input
function displayInput(){
    containerInput.style.display='flex'

};


//function che crea gli input
function createInput(container) {
    
    for(let i = 0; i < 5; i++){

        let inputEl = document.createElement("input");
      
        inputEl.setAttribute("id" , +i);

        container.append(inputEl);
        
    }    
 
};


  
  