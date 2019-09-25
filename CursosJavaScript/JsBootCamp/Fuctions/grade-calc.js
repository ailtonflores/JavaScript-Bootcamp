const grade = function(gradetaken, maxgrade){
let finalgrade ="E"
let yourgrade = gradetaken/maxgrade*100

    if (yourgrade < 50 ) {
        finalgrade = "E"

    }
    else if (yourgrade <60 ){
     finalgrade = "D"
}

     else if (yourgrade <70 ) {
        finalgrade = "C"

}
    else  if (yourgrade < 80 ){
     finalgrade = "B"
 }
    else if (yourgrade < 100 ){

     finalgrade = "A"

    
}

return `you got a ${finalgrade} ${(yourgrade )}% !`

}


let notationgrade = grade (97,100)

console.log(notationgrade)
