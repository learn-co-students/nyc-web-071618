

function consoleLogThis(name, age) {
  console.log(name, age)
  console.log(this);
  Math.max()
}


consoleLogThis.call(5, "graham", 32)
consoleLogThis.apply(5, ["graham", 32])
consoleLogThis.call("potato")
consoleLogThis.call({ foo: "bar" })

const whatIsThisReturnValue = consoleLogThis.bind({ tigers: "sharks", 5: -888, foo: -Infinity })




[1,2,3,4,5,6].map(console.log);
