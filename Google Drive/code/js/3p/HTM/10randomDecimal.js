function number(){
    
    var random = ""

    for (var vueltas = 0; vueltas < 10; vueltas++)
    {
        var i= Math.random();

        random = random + i + "\n";
        
        
    }
    document.getElementById("textarea").innerHTML = random;
 }
 
