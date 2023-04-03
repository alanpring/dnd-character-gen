//D20
//roll D20
function d20Roll() {
    //random to generate number, floor to become integer
    //+1 to set rolls to 1-20
    const d20 = Math.floor(Math.random()* 20) +1;
    console.log("You rolled " + d20 + " on the D20!");
    //print result to div
    document.getElementById("d20-roll-result").innerHTML = d20;
}
    
//CHARACTER TRAITS

//race
const dndRace = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling"]

//class
const dndClass = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]

//




//GENERATE CHARACTER

function generateCharacter() {
    //console.log("Generating character...");
    //console.log("Number of D&D races: " + dndRace.length);
    //console.log("Number of D&D classes: " + dndClass.length);
    //
    //find length of array
    //generate random number between 0 and array length - exclusive as array starts at 0
    //use number to print value from that index

    //How can this be refactored?

    //Race Selector
    var raceLength = Math.floor(Math.random() * dndRace.length);
    //Class Selector
    var classLength = Math.floor(Math.random() * dndClass.length);

    //console.log("You are a " + dndRace[raceLength] + " " + dndClass[classLength]);
    document.getElementById("character-result").innerHTML = "You are a " + dndRace[raceLength] + " " + dndClass[classLength];
}


