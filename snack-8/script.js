// Crea un array di numeri interi 
const numberList = [1,2,3,4,5,6,7,8,9,10];


let total = 0;


for (let i = 0; i < numberList.length; i++){
    if (i % 2 === 1){
        total += numberList[i];
    }
}
console.log(total)

