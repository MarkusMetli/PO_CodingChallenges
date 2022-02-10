function redund (strng) {
    return function returnStr (strng) {
               return strng;
           }
}

let f1 = redund("apple");
let f2 = redund("pear");
let f3 = redund("");

console.log(f1);
console.log(f2);
console.log(f3);


