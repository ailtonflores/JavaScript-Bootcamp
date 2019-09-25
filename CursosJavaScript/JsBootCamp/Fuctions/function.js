

let converter = function (celsius) {
    let y = celsius * 9/5 + 32
    
    return y
    }
    
    let fahrenheit = converter (0)
    let fahrenheit2 = converter (20)
    
    
    console.log(fahrenheit, fahrenheit2)