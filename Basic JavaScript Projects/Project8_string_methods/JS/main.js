function sentenceBuilder() { //Puts all the parts of the sentence together into one string and displays it
    var part1 = "The quick brown fox ";
    var part2 = "jumped over the ";
    var part3 = "lazy dog.";
    var completeSentence = part1.concat(part2, part3);
    document.getElementById("concatStrings").innerHTML = completeSentence;
}

function sliceFunction() { //Cuts the string and displays the indicated text
    var sentence = "Click here to see a secret";
    var section = sentence.slice(20, 26);
    document.getElementById("slicing").innerHTML = section;
}

function upperCase() { //Makes the text all uppercase and displays it
    var text = "i am screaming out.";
    var up = text.toUpperCase();
    document.getElementById("upper").innerHTML = up;
}

function findLetter() { //Finds and displays the index position of the first e in the sentence
    var text = "Click here to find the position of the first E in this sentence";
    var pos = text.search("e");
    document.getElementById("find").innerHTML = pos;
}

function numToString() { //Turns the number into a string and displays it
    var num = 200;
    document.getElementById("num").innerHTML = num.toString();
}

function shortenNum() { //Takes the num and displays it with only 5 digits
    var num = 4.68974575123;
    document.getElementById("longNum").innerHTML = num.toPrecision(5);
}

function roundNum() { //Rounds the num and displays it
    var num = 7.7;
    document.getElementById("round").innerHTML = num.toFixed();
}

function valueOfFunction() { //Displays the text
    var text = "This was posted by using valueOf";
    document.getElementById("value").innerHTML = text.valueOf();
}