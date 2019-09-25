let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// Challenge area
// 1 - 5 - true if correct - false if not correct
let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}

console.log(makeGuess(1))

//minha solucão

let min1= 0
let max1 = 1



let guessnumber = function(entnumber){
radomnumber = Math.floor(Math.random()* (max1 - min1 +1)) + min1

if ( entnumber == radomnumber) {
return  `Voce acertou o numero é mesmo ${radomnumber}]`
    
}

  else   
{
return  `Voce errou , tente novamente`

}

}

showresult = guessnumber(0)

console.log(showresult)




