let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let primate = {
   name: 'Brad',
   species: 'chimp',
   mass: 11,
   age: 6
};

let dog = {
   name: 'Leroy',
   species: 'beagle',
   mass: 14,
   age: 5
};

let microAnimal = {
   name: 'Almina',
   species: 'tardigrade',
   mass: 0.0000000001,
   age: 1
};


superChimpOne['astronautID'] = 7
salamander['astronautID'] = 3
primate.astronautID = 9
dog['astronautID'] = 10
microAnimal['astronautID'] = 5



let crew = [superChimpOne, salamander, primate, dog, microAnimal]

superChimpOne['move'] = function () {
   return Math.floor(Math.random() * 11)
};
salamander['move'] = function () {
   return Math.floor(Math.random() * 11)
};
primate['move'] = function () {
   return Math.floor(Math.random() * 11)
};
dog['move'] = function () {
   return Math.floor(Math.random() * 11)
};
microAnimal['move'] = function () {
   return Math.floor(Math.random() * 11)
};

function crewReports(animal) {
   return console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
};

crewReports(primate)

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
let newArr = []
for (let i = 0; i < crew.length; i++) {
  let turns = 0
  let steps = 0
         crew[i].steps = crew[i].move()
  while (crew[i].steps < 20) {
    crew[i].steps += crew[i].move()
    turns++
  }
  newArr.push(`${crew[i].name} took ${turns} turns to take 20 steps.` );
      }

   
   console.log(newArr)