function dataType() { //Writes the type of data to the screen.
    document.write(typeof 5);
}

function add() { //Adds these two numbers
    document.write(25 + "4");
}

function noNumber() { //Writes NaN to the screen, as you can't devide by 0
    document.getElementById("NaN").innerHTML = 0/0;
}

function notANumber() { //Checks to see if apple is a number
    document.getElementById("string").innerHTML = isNaN("Apple");
}

function aNumber() { //Checks to see if 5 is a number
    document.getElementById("number").innerHTML = isNaN("5");
}

function posInfinity() { //Writes infinity to the screen
    document.write(5E310);
}

function negInfinity() { //Writes -infinity to the screen
    document.write(-5E310);
}

function trueBool() { //Checks to see if this is true
    document.write(6 > 3);
}

function falseBool() { //Checks to see if this is true
    document.write(6 < 3);
}

console.log(5 < 2); //Checks to see if this is true and writes the result to the console

function equal() { //Checks to see if this is true
    document.write(5 == 5);
}

function notEqual() { //Checks to see if this is true
    document.write(5 == 14);
}

function sameTypeValue() { //Checks to see if this is true
    x = 10;
    y = 10;
    document.write(x === y);
}

function diffTypeValue() { //Checks to see if this is true
    x = 10;
    y = "apple";
    document.write(x === y);
}

function diffTypeSameValue() { //Checks to see if this is true
    x = 10;
    y = "10";
    document.write(x === y);
}

function sameTypeDiffValue() { //Checks to see if this is true
    x = 10;
    y = 4;
    document.write(x === y);
}

function andTrue() { //Checks to see if both are true
    document.write(5 == 5 && 6 == 6);
}

function andFalse() { //Checks to see if both are true
    document.write(7 == 7 && 8 == 9);
}

function orTrue() { //Checks to see if one or the other is true
    document.write(9 == 9 || 10 == 11);
}

function orFalse() { //Checks to see if one or the other is true
    document.write(11 == 12 || 12 == 13);
}

function notFalse() { //Checks to see if this is not true
    document.write(! 20 > 10);
}

function notTrue() { //Checks to see if this is not true
    document.write(!20 < 10);
}