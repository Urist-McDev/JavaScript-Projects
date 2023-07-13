function addition() {
    var add = 2 + 2;
    document.getElementById("adding").innerHTML = "2 + 2 = " + add;
}

function subtraction() {
    var sub = 72 - 43;
    document.getElementById("minus").innerHTML = "72 - 43 = " + sub;
}

function multiply() {
    var times = 6 * 8;
    document.getElementById("multi").innerHTML = "6 x 8 = " + times;
}

function devision() {
    var devi = 6 / 3;
    document.getElementById("devide").innerHTML = "6 / 3 = " + devi;
}

function manyMathOperations() {
    var math = 5 + 7 / 2 * 45 - 100 + (7 + 8);
    document.getElementById("math").innerHTML ="5 + 7 / 2 * 45 - 100 + (7 + 8) = " + math;
}

function modulusOperator() {
    var modulus = 64 % 7;
    document.getElementById("mod").innerHTML = "Deviding 64 from 7 leaves a remainder of: " + modulus;
}

function negationOperator() {
    var number = -18;
    document.getElementById("negation").innerHTML = -number;
}

function increase() {
    var number = 8;
    number++;
    document.getElementById("add_one").innerHTML = number;
}

function decrease() {
    var number = 8;
    number--;
    document.getElementById("minus_one").innerHTML = number;
}

function randomNum() {
    window.alert(Math.random() * 100);
}

function roundUp() {
    var number = 4.2;
    number = Math.ceil(number);
    document.getElementById("round").innerHTML = number;
}