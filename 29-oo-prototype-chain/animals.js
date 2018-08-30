
function Animal(hasBackbone) {
}

Animal.prototype.die = () => "urk"

// const haveBackbone = function(){
//     console.log("I have a backbone");
//   }

function Mammal(furLength, cuteness) {

  console.log(this);

  //this is the object we are in the process of creating with 'new'
  this.furLength = furLength;
  this.cuteness = cuteness;
  this.isMammal = true;


  // this.haveBackbone = haveBackbone
}

Mammal.prototype = Object.create(Animal.prototype)

// note: if you do the assignment on line 15 
// AFTER you do the assignments on line 20-21
// you will have a bad time — the prototype gets completely overwritten
Mammal.prototype.nurse = () => "baby food"
Mammal.prototype.growHair = () => "fhtpht"



shrew = new Mammal()

// shrew = Object.create(Mammal.prototype)
// Mammal.call(shrew)

console.log(shrew.nurse())
console.log(shrew.die())


frog = new Animal()

//frog.nurse() //error

console.log(frog.die())

console.log(shrew.__proto__)

console.log(shrew.__proto__.__proto__)


console.log(frog.__proto__ === shrew.__proto__.__proto__)

