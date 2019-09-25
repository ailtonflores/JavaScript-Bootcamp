const grade = function(gradetaken, maxgrade){
    //let finalgrade ="E"
    const yourgrade = gradetaken/maxgrade*100
    
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
    
    
    const notationgrade = grade (97,100)
    
    console.log(notationgrade)
    console.log( grade(87,100))
    console.log(notationgrade, grade(87,100))