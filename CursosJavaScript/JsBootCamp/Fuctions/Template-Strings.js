/* Multiple arguments
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
console.log(tip)*/

//Challenge area
// A 25% tip on $40 would be $10
let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(60)
console.log(tip)


//my solution
let bill = function(total, tipPercent = 0.2, tipvalue =10){
if (total < 40 )
{
var totalbill = total + tipvalue

}
else{


 var totalbill  = total + total*tipPercent }

return `Bill Value: ${total} - Tip Percent:  ${tipPercent} - Total Value: ${totalbill} Minimum tiptax: ${tipvalue}`

}

let printedvalue = bill(80)

console.log(printedvalue)