/*let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))*/






//my solutio
var myAccount= {
name : 'Ailton',
nunber : '100078-9',
balance : 0,
expenses: 0,
incomes: 0

}

var addExpence = function (account, amount ){
     
    account.expenses = account.expenses + amount
    
return {

   // expence : `Account Balance: ${-account.expenses + account.incomes }, Expense: ${amount}, Income: ${account.incomes} `
}
    
}

var addIncommes = function (account,income ){


account.income= account.incomes + income
return {
    //    entermoney : `Income: ${account.incomes} Balance: ${account.balance} `
}

}

let resetAccount = function (account){

account.expenses = 0
account.income = 0

}
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}
 addIncommes (myAccount,3000)
 addExpence  (myAccount,2000)
 //resetAccount (myAccount)
console.log( getAccountSummary(myAccount))
//resetAccount (myAccount)

console.log( getAccountSummary(myAccount))