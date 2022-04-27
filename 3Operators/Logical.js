// Logical AND (&&)
//Returns true if both oprand is TRUE

console.log(true && true);  //true
console.log(false && true);  //false

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleforLoan = highIncome && goodCreditScore;
// console.log(eligibleforLoan);   //true

///Logical OR ||
//Returns true if one of the oprand is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleforLoan = highIncome || goodCreditScore;
console.log(eligibleforLoan);   


//NOT(!)
let applicationRefused = !eligibleforLoan;
console.log('App ' + eligibleforLoan);

