

// my solution

let isvalidPassaword = function (password, Lenghtent) {
   
   
    let formatpass= password.includes('password')


    if ( formatpass==true){

    printmess1= "Word not valid"

}
else {
    printmess1 =  " Formato ok"
}



    let lenghtpass = password.length

   

if (lenghtpass > Lenghtent){
    printmess= "Password lenght OK."
}
else { 
    printmess= `Please enter a password with minimum ${Lenghtent} carachters long`
}

return `${printmess}  ${printmess1} `
}


let resposta= isvalidPassaword ('password', 3)

console.log(resposta)
