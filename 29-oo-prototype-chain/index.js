
// Object.prototype.describe = describe

const programmingLanguagePrototype = {
  byTheWay: "I am a programming language",
  describe: function() {
    return `My name is ${ this.name } and my inheritance model is ${ this.inheritanceModel }`;
  }
}

// const rb = {
//   name: "Ruby",
//   inheritanceModel: "class-based",
// }

const ruby = Object.create(programmingLanguagePrototype)
ruby.name = "Ruby";
ruby.inheritanceModel = "class-based"


// const js = {
//   name: "JavaScript",
//   inheritanceModel: "prototype-based",
// }

const js = Object.create(programmingLanguagePrototype, {
  name: { value: "JavaScript" },
  inheritanceModel: { value: "prototype-based" }
})


function ProgrammingLanguage(name, inheritanceModel){

}

ProgrammingLanguage.prototype = programmingLanguagePrototype

const go = new ProgrammingLanguage()


