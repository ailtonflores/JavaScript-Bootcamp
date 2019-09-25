let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge area
// Create function - take fahrenheit in - return object with all three

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temps = convertFahrenheit(74)
console.log(temps)

// my solution
var termometer ={
    tempKevin: '',
    tempCelsius: '',
    tempFahrenheit:''
    }
var tempConvert = function (fahrenheit){
    
    termometer.tempFahrenheit = (fahrenheit)
    termometer.tempCelsius = (fahrenheit - 32) * 5 / 9
    termometer.tempKevin = (fahrenheit + 459.67) * 5 / 9


 
 return {
temperature :`The envirometal temperature is : ${termometer.tempFahrenheit} Fahrenheith, ${termometer.tempKevin} Kevin, ${termometer.tempCelsius} Celsius degrees `

 }
}

 var showTemp = tempConvert(74)


 console.log(showTemp.temperature)