function cakeFunction() {
    var cakeOutput;
    var cakes = document.getElementById("cakeInput").value;
    var cakeString = " is a great cake!";
    switch(cakes) {
        case "White": cakeOutput = "White" + cakeString;
        break;
        case "Chocolate": cakeOutput = "Chocolate" + cakeString;
        break;
        case "Marbled": cakeOutput = "Marbled" + cakeString;
        break;
        case "Red Velvet": cakeOutput = "Red Velvet" + cakeString;
        break;
        case "Peanut Butter": cakeOutput = "Peanut Butter" + cakeString;
        break;
        default: cakeOutput = "Write your choice exactly as written on the list."
    }
    document.getElementById("output").innerHTML = cakeOutput;
}

var x = document.getElementsByClassName("smallText");
x[0].innerHTML = "Such smol text.";

//Gradient
let canvas = document.getElementById("firstCanvas");
let ctx = canvas.getContext("2d");

let grid = ctx.createRadialGradient(100, 50, 5, 90, 100, 100);
grid.addColorStop(0, "green");
grid.addColorStop(1, "white");

ctx.fillStyle = grid;
ctx.fillRect(10, 10, 600, 300);

//Rect gradient
let c = document.getElementById("secondCanvas");
let context = c.getContext("2d");

let grd = context.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

context.fillStyle = grd;
context.fillRect(20, 20, 600, 300);