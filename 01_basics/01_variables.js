const accountID = 2345
let accoontName = "Durgesh"
var accountPassword = 12345678
let accountState;

// Prefer not to use 'var' because of issue in block scope and fuctional scope //

console.log("The account ID is " + accountID)
console.log(accoontName)
console.log(accountPassword)



accoontName = "Prabhugaonkar"
console.log(accoontName)


console.table([accountID,accoontName,accountPassword,accountState])