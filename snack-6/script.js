// 1 Inserisci un numero con un promt
const userNumber = Number(prompt("Inserisci un numero"))
// 2.se è pari stampa il numero, se è dispari stampa il numero successivo.
if(userNumber % 2 == 0){
    console.log(userNumber)
}else{
    console.log(userNumber + 1)
}