// # 1. Reverse String

function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// input string
const string = "pilut tnim";

const result = reverseString(string);
//console.log(result);

// # 2. Character Count

str = "Mint Tulip Tricksters";
strCount = str.length;

//console.log(str.length)

// # 3. Capitalize Words

function capitalizeWords(first) {
    let words = first.split(" ").map(word => {
        let firstLetter = word.slice(0,1);
        let restWord = word.slice(1);
           firstLetter = firstLetter.toUpperCase();

        return `${firstLetter}${restWord}`
    })
    return words.join(" ");
}

//console.log(capitalizeWords("mint tulip tricksters"));