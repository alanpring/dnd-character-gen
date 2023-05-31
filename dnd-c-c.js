//TO DO

/*

- create a copy of this inventory (non-destructive) and add random items from random starter item array. Need the original array preserved roll character can be rolled again

- character weapon genertor
- weapon specialistation gen

- capitalise the name


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

const characterInventory = { //uses object literals, nest obj lit, nested with arrays
    clothing: ['hat', 'trousers', 'fine clothes'],
    armor: {type: 'light', name: 'leather'}, //update based on class? armor type and name
    weapons: {melee: ['rapier', 'sword'], ranged: ['crossbow']},//update based on class?
    gear: ['rope', 'blanket', 'tinder box', '12 bolts'], //update ammo count + bolts suffix
    money: {gold: 10, silver: 0, copper: 0}, //need to display this value with gp suffix on print
    food: ['apple', 'duck jerky']
};
//will need to add additional specific inventory items based on class
//create a copy of this inventory (non-destructive) and add random items from random starter item array. Need the original array preserved roll character can be rolled again

/*
//How to access these values
console.table(characterInventory);
console.table(characterInventory.clothing);
console.table(characterInventory.armor);
console.log(`Armor type is: ${characterInventory.armor.type}`);
console.log(`Armor type is: ${characterInventory.armor.name}`);
console.table(characterInventory.weapons);
console.log(`Melee weapons are: ${characterInventory.weapons.melee}`);
console.log(`Ranged weapons are: ${characterInventory.weapons.ranged}`);
console.table(characterInventory.gear);
console.table(characterInventory.money);
console.log(`Gold: ${characterInventory.money.gold}`);
console.table(characterInventory.food);
console.log(characterInventory.food[1]);
*/


//loop characterName arrays through randomIndexNumber to produce name?
//e.g. artmis 'the bloddied jester' clove // artmis clove - the bloodied jester
//take user input?
//check project name generator for this and refactor


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
    console.info(`You rolled ${d20} on the D20!`);
    document.getElementById("d20-roll-result").innerHTML = d20; //print result to div
}


function generateCharacter() { //change this to generate individual components instead of all character?

    //          
    //  DATA    
    //          
    
    //race
    const dndRace = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling"];
    //class
    const dndClass = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
    //console.log("Number of D&D races: " + dndRace.length);
    //console.log("Number of D&D classes: " + dndClass.length);

    const dndName = {
        firstName : ['artimis', 'herald', 'ragnor', 'charlie', 'hunter'],
        titleNameA : ['deviant', 'bloodied', 'bountiful', 'hateful', 'loving'],
        titleNameB: ['destroyer', 'killer', 'sailor', 'soldier', 'jester'],
        lastName : ['bloodthorne', 'clove', 'hope', 'raylor']
    }


    //            
    //  FUNCTIONS 
    //            

    //generate random number between 0 and array length - exclusive as array starts at 0
    function randomIndexNumber(i){
        return i[Math.floor(Math.random() * i.length)];
    }

    //https://flexiple.com/javascript/javascript-capitalize-first-letter/
    //alt css text-transform:capitalize;
    function capitaliseFirst(i){
        //would need to make strings first
    }

    //          //
    //  OUTPUT  //
    //          //

    raceLength = randomIndexNumber(dndRace);
    //console.log(`Race using randomNumber function is: ${raceLength}`);
    classLength = randomIndexNumber(dndClass);
    //console.log(`Class using randomNumber function is: ${classLength}`);
    
    //better way to structure? loop?
    firstName = randomIndexNumber(dndName.firstName);
    titleNameA = randomIndexNumber(dndName.titleNameA);
    titleNameB = randomIndexNumber(dndName.titleNameB);
    lastName = randomIndexNumber(dndName.lastName);
  

    //
    //  PRINT
    //
    console.log(`%c You are a ${raceLength} ${classLength}!`, 'font-size: 20px; font-weight:700');
    console.log(`%c Here is your inventory:`, 'font-size: 16px');
    console.log(characterInventory);

    //HTML PRINT
    document.getElementById("character-class").innerHTML = `You are a ${raceLength} ${classLength}!`;
    document.getElementById("character-name").innerHTML = `Your name is ${firstName} \'the ${titleNameA} ${titleNameB}\' ${lastName}`;

}


