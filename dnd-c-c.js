//TO DO

/*

- create a default inventory
- create a copy of this inventory (non-destructive) and add random items from random starter item array. Need the original array preserved roll character can be rolled again

- character weapon genertor
- weapon specialistation gen

- character name generator - first, nickname, last e.g. Ragnor 'The Blood Bringer' Thorn

- character look generator - height, clothes etc


- add class specific specialisations

- randomly determine character point spend
- weight the point spend based on the character race and class

- provide all stats required for a new character sheet

- stick and twist feature? hold certain attributes and re-roll others? 





- use a loop somewhere (for, map, filter etc)
- use conditional statement
- ensure things are in the correct scope
- check if functions are being used correctly
- check best practice is being followed
- something with Math in - done
- switch case - catchphrase? would be better of random index from array
- arrow function






*/


//                      //    
//   CHARACTER TRAITS   //
//                      //

//should these be global or block??

const characterInventory = [];

//objects with multi values
const defaultInventory = [];



const dndRaceImage = [];

const dndClassImage = [];





//                      //
//  GENERATE CHARACTER  //
//                      //

//HOW TO SCOPE THIS OUT CORRECTLY


//die roll function to be used later to build character?
//is having number in function name bad practice?

function d20Roll() { //random to generate number, floor to become integer
    const d20 = Math.floor(Math.random()* 20) +1; //+1 to set rolls to 1-20
    console.log(`You rolled ${d20} on the D20!`);
    document.getElementById("d20-roll-result").innerHTML = d20; //print result to div
}

function generateRace() {
    const dndRace = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling"];
    const raceSelection = dndRace[Math.floor(Math.random() * dndRace.length)];
    console.log(`Race generated is: ${raceSelection}`);
    return raceSelection;
}

function generateCharacter() { //change this to generate individual components instead of all character
    //console.log("Number of D&D races: " + dndRace.length);
    //console.log("Number of D&D classes: " + dndClass.length);

    //race
    const dndRace = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling"];
    generateRace();


    //class
    const dndClass = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

    
    //find length of array
    //generate random number between 0 and array length - exclusive as array starts at 0
    //use number to print value from that index



    //          //
    //  OUTPUT  //
    //          //
    
    //How can this be refactored? Loop?
    //Race Selector
    let raceLength = Math.floor(Math.random() * dndRace.length);
    //Class Selector
    let classLength = Math.floor(Math.random() * dndClass.length);

    console.log(`You are a ${dndRace[raceLength]} ${dndClass[classLength]}!`);
    document.getElementById("character-result").innerHTML = `You are a ${dndRace[raceLength]} ${dndClass[classLength]}!`;
}


