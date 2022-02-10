
const vowels = ["a", "e", "i", "o", "u"];

function vowSub(str) {
    let subStr = [];
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            let temp = "";
            for (let j = i; j < str.length; j++) {
                if (!vowels.includes(str[j])) {
                    let temp2 = temp.concat(str[j]);
                    temp = temp2;
                } else {
                    let temp2 = temp.concat(str[j]);
                    temp = temp2;
                    subStr.push(temp);
                }
            }
        }
    }
    subStr.sort();
    return subStr;
}

function conSub(str) {
    let subStr = [];
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            let temp = "";
            for (let j = i; j < str.length; j++) {
                if (vowels.includes(str[j])) {
                    let temp2 = temp.concat(str[j]);
                    temp = temp2;
                } else {
                    let temp2 = temp.concat(str[j]);
                    temp = temp2;
                    subStr.push(temp);
                }
            }
        }
    }
    subStr.sort();
    return subStr;
}

let f1 = vowSub("apple");
let f2 = vowSub("hmm");
let f3 = conSub("motor");
let f4 = conSub("aviation");
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);

