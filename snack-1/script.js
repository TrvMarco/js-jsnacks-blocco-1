// 1. L’utente inserisce due numeri in successione, con due prompt.
const userFirstNumber = prompt("Inserisci il primo numero");
const userSecondNumber = prompt("Inserisci il secondo numero");
// 2. Il software stampa il maggiore.
if ( userFirstNumber > userSecondNumber){
    console.log( userFirstNumber );
}else if (userSecondNumber > userFirstNumber){
    console.log( userSecondNumber );
}else{
    console.log("pareggio");
}