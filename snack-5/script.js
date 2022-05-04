// Crea un array vuoto.
let empity = [];
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
for (i = 0; i < 6; i++){
    let userNumber = Number(prompt("Inserisci un numero"))
    console.log( userNumber )
    if ( userNumber % 2 == 1 ){
        empity.push[ userNumber ]
    }
}

console.log(empity)
