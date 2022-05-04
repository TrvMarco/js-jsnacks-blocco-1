let userNumbersTotal = 0
// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
for( i = 0; i < 10; i++ ){
    let userNumbers = Number(prompt("inserisci un numero"));
    console.log(userNumbers)
    userNumbersTotal = userNumbersTotal + userNumbers;
}
console.log(userNumbersTotal)