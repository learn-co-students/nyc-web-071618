

class Animal {

  constructor(name) {
    // debugger;
    this.name = name;
  }

  die() {
    console.log("urk");
  }

}



class Mammal extends Animal {

  // constructor(furLength, cuteness, name){
  //   super(name)
  //   this.name = "fdjksdfjhk"
  //   this.furLength = furLength;
  //   this.cuteness = cuteness;
  //   this.isMammal = true;
  // }

  die() {
    // super()
    console.log("die with fur")
  }


}

class Human extends Mammal {

  constructor({ name, weight }){
    super(name)
    this.weight = weight
    this.timesIveTripped = 0
  }

  trip() {
    const everyTimeITrip = function(number) {  
      console.log(this);
      this.timesIveTripped += number
    }.bind(this); // <-- take off this semicolon, I dare you


    // const boundFunction = (number) =>  { everyTimeITrip.call(this, number) }

    // console.log(this);
    ([1,2,3]).forEach(everyTimeITrip);
  }



  haveImpostorSyndrome() {
    console.log("Ack")
  }
}



graham = new Human(130, "Graham")



// potato = new Mammal(5, 6, "potato")


