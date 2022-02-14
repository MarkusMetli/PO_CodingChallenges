
function threeLongest(str) {
    let words = str.split(' ');
    let wordLengths = [];
    let longest = [];
    if(words.length >=3) {
        for(let w of words) {
            wordLengths.push(w.length);
        }
        wordLengths.sort((a, b) => b - a);
        for(let w of words) {
            if(w.length >= wordLengths[2]) {
                if(longest.length != 3) {
                    longest.push("#" + w);
                }
            }
        }
    }else{
        for(let w of words){
            longest.push("#" + w);
        }
    }
    return longest;
}

let s1 = "How the Avocado Became the Fruit of the Global Trade";
let s2 = "Why You Will Probably Pay More for Your Christmas Tree This Year";
let s3 = "Hey Parents, Surprise, Fruit Juice Is Not Fruit";
let s4 = "Visualizing Science";
console.log(threeLongest(s1));
console.log(threeLongest(s2));
console.log(threeLongest(s3));
console.log(threeLongest(s4));