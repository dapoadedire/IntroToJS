let myString = "AdedireAdedapoFarouq";



let myReversedString = myString.split('').reverse().join('');
console.log(myReversedString);

let reversed =  (string) => [...string].reverse().join('');

console.log(reversed(myString));