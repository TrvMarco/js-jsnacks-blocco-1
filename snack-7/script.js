// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

// 1. Creo Array con lista di nomi
const nameList = ["Marco","Luca", "Giovanni", "Paolo", "Nicola"];
const surnameList = ["Rossi", "Bianchi", "Verdi", "Pinco", "Pallino"];

const randomList = []

for ( let i = 0; i < 5; i++ ){
    const indexNameRandom = Math.floor(Math.random() * nameList.length);
    const indexSurnameRandom = Math.floor(Math.random() * surnameList.length);
    randomList.push(`${nameList[indexNameRandom]} ${surnameList[indexSurnameRandom]}`);
}

console.log(randomList)





// 1. creo ciclo per stampare i nomi
// for (let i = 0; i < nameList.length; i++){
//     console.log(nameList[i]);
// }

// for (let i = 0; i < surnameList.length; i++){
//     console.log(surnameList[i]);
// }

// console.log(nameList+surnameList)