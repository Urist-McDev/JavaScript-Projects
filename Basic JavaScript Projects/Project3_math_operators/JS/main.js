function addition() { //Adds two numbers and displays it
    var add = 2 + 2;
    document.getElementById("adding").innerHTML = "2 + 2 = " + add;
}

function subtraction() { //Subtracts two numbers and displays it
    var sub = 72 - 43;
    document.getElementById("minus").innerHTML = "72 - 43 = " + sub;
}

function multiply() { //Multiplys two numbers and displays it
    var times = 6 * 8;
    document.getElementById("multi").innerHTML = "6 x 8 = " + times;
}

function devision() { //Devides two numbers and displays it
    var devi = 6 / 3;
    document.getElementById("devide").innerHTML = "6 / 3 = " + devi;
}

function manyMathOperations() { //Does a bunch of math and displays it
    var math = 5 + 7 / 2 * 45 - 100 + (7 + 8);
    document.getElementById("math").innerHTML ="5 + 7 / 2 * 45 - 100 + (7 + 8) = " + math;
}

function modulusOperator() { //Gets the remainder of a devision and displays it
    var modulus = 64 % 7;
    document.getElementById("mod").innerHTML = "Deviding 64 from 7 leaves a remainder of: " + modulus;
}

function negationOperator() { //Gets the opposite number and displays it
    var number = -18;
    document.getElementById("negation").innerHTML = -number;
}

function increase() { //Adds 1 to a number and displays it
    var number = 8;
    number++;
    document.getElementById("add_one").innerHTML = number;
}

function decrease() { //Subtracts a number and displays it
    var number = 8;
    number--;
    document.getElementById("minus_one").innerHTML = number;
}

function randomNum() { //Gets a random number between 0 and 100 and displays it
    window.alert(Math.random() * 100);
}

function roundUp() { //Rounds up a number and displays it
    var number = 4.2;
    number = Math.ceil(number);
    document.getElementById("round").innerHTML = number;
}