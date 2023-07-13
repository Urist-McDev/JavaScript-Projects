//This makes the dictionary
var space_marine = {
    Chapter: "Salamander",
    Company: "1st",
    Weapon: "Melta Gun",
    Age: "170"
};

function getWeapon() { //Deletes the value of the Weapon key, then tries to disply it. Undefined will be displayed instead
    delete space_marine.Weapon;
    document.getElementById("dictionary").innerHTML = space_marine.Weapon;
}

function getChapter() { //Gets and displys the value of the Chapter key
    document.getElementById("chapter").innerHTML = space_marine.Chapter;
}