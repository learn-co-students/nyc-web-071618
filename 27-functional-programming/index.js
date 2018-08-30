

// // function fakeSetInterval(fn, timeout){
// //   console.log(fn)
// //   console.log(timeout)

// //   fn();
// //   fn();
// //   fn();
// //   fn();
// //   fn();
// //   fn();
// //   fn();
// //   fn();
// //   fn();
// // }

// // setInterval(sayHi(), 1000)


// const squareIt = number => number * number


// let number = 2

// const consoleLogSquares = () => {

//   // debugger;

//   number = squareIt(number);
//   console.log(number)

//   return number;
// }




// setInterval(consoleLogSquares, 1000)




// const getCostFromUser = (stringyCost) => { console.log(stringyCost); return parseInt(stringyCost) }
const getCostFromUser = stringyCost => parseInt(stringyCost)
const addServiceFee = cost => {

  // const getServiceFee = () => {
  //   return (new Date().getSeconds())
  // }

  return 7000 + cost
}

const addTax = subtotal => subtotal * 1.0875

const printReciept = total => `Your total is ${ total }`


// const integerCost = getCostFromUser("15")
// const costWithServiceFee = addServiceFee(integerCost)
// const costWithServiceFeeAndTax = addTax(costWithServiceFee)
// const recieptText = printReciept(costWithServiceFeeAndTax)


// const getRecieptForUserCost = (stringyCost) => {
//   const integerCost = getCostFromUser(stringyCost)
//   const costWithServiceFee = addServiceFee(integerCost)
//   const costWithServiceFeeAndTax = addTax(costWithServiceFee)
//   const recieptText = printReciept(costWithServiceFeeAndTax)
//   return recieptText;
// }


const combineFunctions = (...allTheFunctions) => {
  return (stringyCost) => {

    let output = stringyCost

    allTheFunctions.forEach((functionCurrentlyBeingIteratedOver) => {
      output = functionCurrentlyBeingIteratedOver(output)
    });

    console.log(`I'm a function, wheee, and stringyCost is ${ stringyCost } and output is ${ output }`) 

  }
}

const pipelineCanada = combineFunctions(getCostFromUser, addTax, addServiceFee, printReciept)
const pipelineUsa = combineFunctions(getCostFromUser, addServiceFee, addTax, printReciept)
// const pipeline = combineFunctions(getCostFromUser, addTax, printReciept)

const getRecieptForUserCostCanada = (stringyCost) => {
  return pipelineCanada(stringyCost)
}

const getRecieptForUserCostUsa = (stringyCost) => {
  return pipelineUsa(stringyCost)
}

console.log(getRecieptForUserCostUsa("15"))
console.log(getRecieptForUserCostCanada("15"))
console.log(getRecieptForUserCostUsa("18"))


