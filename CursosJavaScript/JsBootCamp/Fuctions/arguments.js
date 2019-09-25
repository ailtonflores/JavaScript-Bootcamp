// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Deafult arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
let getTip = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tip = getTip(40, .25)
console.log(tip)

//my solution
let bill = function(total, tipPercent = 0.2){

 let totalbill  = total + total*tipPercent 

return "Bill Value:  " + total + "  Tip Percent: " + tipPercent + "  Total Value:" + totalbill

}

let printedvalue = bill(100)

console.log(printedvalue)