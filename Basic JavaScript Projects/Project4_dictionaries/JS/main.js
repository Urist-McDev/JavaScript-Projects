var space_marine = {
    Chapter: "Salamander",
    Company: "1st",
    Weapon: "Melta Gun",
    Age: "170"
};

function getWeapon() {
    delete space_marine.Weapon;
    document.getElementById("dictionary").innerHTML = space_marine.Weapon;
}

function getChapter() {
    document.getElementById("chapter").innerHTML = space_marine.Chapter;
}