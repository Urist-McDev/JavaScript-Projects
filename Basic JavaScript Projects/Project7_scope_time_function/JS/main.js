var x = 10; //Global var.

function local() { //Uses a local and global var to do math.
    var y = 10;
    var sum = x + y;
    document.getElementById("variable").innerHTML = sum;
}

function missingVar() { //Uses the local var from the last function. Will cause an error.
    var sum = x + y;
    console.log(sum);
}

function getTime() { //Gets the time and will display the text if it is before 20:00.
   if (new Date().getHours() < 20) {
        document.getElementById("time").innerHTML = "Hello, welcome to today!"
    }
}

function statement() { //Displays the text if age is older than 18.
    var age = 19;
    if (age > 18) {
        document.getElementById("ifStatement").innerHTML = "You are 18 or older.";
    }
}

function ageFunction() { //Takes the inputed age. If it is equal to or over 21, the first text is displayed. Otherwise the second is.
    age = document.getElementById("age").value;
    if (age >= 21) {
        drink = "You are old enough to drink! Let's go party!"
    }
    else {
        drink = "You are not old enough to drink. You have to wait like everyone else."
    }
    document.getElementById("howOldAreYou").innerHTML = drink;
}

function timeFunction() { //Gets the time and displays some text depending on when it is.
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is the morning. Go back to bed."
    }
    else if (time >= 12 == time < 18) {
        reply = "It is the afternoon. Time for a nap."
    }
    else {
        reply = "It is the evening. Time for bed."
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}