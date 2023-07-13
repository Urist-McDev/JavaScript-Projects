//This function changes a button to say the var when clicked
function myFirstFunction() {
    var str = "This was made by a function";
    document.getElementById("Button").innerHTML = str;
}

//This function concatenates a sentence when a paragrah is clicked, then changes it to the new sentence
function concatenateFunction() {
    var sentence = "Functions make using JS";
    sentence += " easier and funner!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function changeH3() {
    var header = "Good work!"
    document.getElementById("Header").innerHTML = header;
}