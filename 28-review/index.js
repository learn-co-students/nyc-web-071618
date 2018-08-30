

function foo() {
  return "bar"
}

var foo = function() {
  return "bar"
}

[1,2,3].forEach(function(){
  return "bar"
});

[1,2,3].forEach(function foo(){
  return "bar"
});


[1,2,3].forEach(foo);

(function(){
  return "bar"
})()


[1,2,3].forEach(() => "bar");
[1,2,3].forEach(number => "bar");
[1,2,3].forEach((number, somethingElse) => "bar");



const returnBar = () => "bar"

const returnBar = whatever => "bar"

const returnBar = () => { return "bar" }

const returnBar = () => { 
  console.log("blat");
  return "bar"
}



if (true) {
  console.log("whoopee")
}
else {
  console.log("blat")
}


