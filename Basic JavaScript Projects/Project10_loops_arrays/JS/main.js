function callLoop() { //Loops through so long as x is equal to or less than 15 and displays all the numbers
    var num = "";
    var x = 1;
    while (x <= 15) {
        num += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = num;
}

function getLength() { //Displays the number of characters in the word
    var text = "Apple";
    var textLength = text.length;
    document.getElementById("length").innerHTML = textLength;
}

function forLoop() { //Goes through the array and displays each entry
    var instruments = ["Dulcimer", "Balalaika", "Tongue Drum", "Didgeridoo", "Duduk", "Ocarina", "Hurdy Gurdy", "Djembe", 
                        "Shaman Drum", "Kalimba", "Crwth", "Pan Flute", "Vielle", "Ranat Thum", "Russian Vargan"];
    var content = "";
    var y;

    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("listOfInstruments").innerHTML = content;
}

function arrayFunction() { //Creates an array and displays an element from it
    var array = [];
    array[0] = "awake";
    array[1] = "sleeping";
    array[2] = "eating";
    document.getElementById("array").innerHTML = "Right now I am " + array[0] + ".";
}

function constantFunction() { //Creates an object, then changes and adds an item to it then displays the results
    const computer = {type: "desktop", brand:"Corsiar", color:"RGB"};
    computer.brand = "Origin";
    computer.price = "$1,500";
    document.getElementById("constant").innerHTML = "This computer is a " + computer.type + " made by " + computer.brand + " and costs " + computer.price;
}

function letFunction() { //Uses the let keyword to change x for just a single block
    var x = 10;
    document.write(x);
        {
            let x = 20;
            document.write("<br>" + x);
        }
    document.write("<br>" + x);
}

function returnFunction(num) { //Returns the listed phrase with the given number when called
    return "You have " + num + " cakes! Good for you.";
}

document.getElementById("return").innerHTML = returnFunction(10);

let spaceMarine = { //creates a Space Marine object, then gives the description when called
    chapter: "Iron Hands",
    rank: "Forge Master",
    age: "543",
    weapon: "grav cannon",
    desc: function() {
        return "This space marine is from the " + this.chapter + " who holds the rank of " + this.rank + " and is " + this.age +
        " years old. He uses a " + this.weapon + " in combat.";
    }
};

document.getElementById("method").innerHTML = spaceMarine.desc();

function breakContinue() { //Makes a loop that can go up to 20, but skips the number 4 and stops at 15
    var x = 20;
    var content = "";
    for (let i = 0; i < x; i++) {
        if (i === 4) { continue; }
        if (i === 15) { break; }
        content += i + "<br>";
    }
    document.getElementById("breaks").innerHTML = content;
}