function deci(){
    var cad="";
    for(x=0;x<10;x++){
        cad+=Math.random()+"\n";
    }
    document.getElementById("textarea").innerHTML=cad;
}

function ente(){
    var cad="";
    for(x=0;x<10;x++){
        cad+=Math.floor(Math.random()*(11-1)+1)+"\n";
    }
    document.getElementById("textarea").innerHTML=cad;
}