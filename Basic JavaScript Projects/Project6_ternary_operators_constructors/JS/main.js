function Ride_Function() { //Displys diffrent things depending on if you meet the requirements or not.
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { //Displys diffrent things depending on if you meet the requirements or not.
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function pText() { //Displays the text when paragraph is clicked on.
    document.getElementById("New_and_this").innerHTML = "Hello there!"
}

function nestedFunction() { //A nested function that gives the first 6 letters of the Alphabet.
    document.getElementById("Nested_Function").innerHTML = Alphabet();
    function Alphabet() {
        var Alphabet = "A B C";
        function nextLetter() {
            Alphabet += " D F G";
        }
        nextLetter();
        return Alphabet;
    }
}