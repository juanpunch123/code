function carac(){
    let t=document.getElementById("textarea").value;
    /*var carac=t.length;
    for(x of t){
        if(x==' ')
            carac-=1;
    }*/
    document.getElementById("cara").innerHTML=t.length;
}

function palab(){
    let t=document.getElementById("textarea").value;
    /*var palabra=1;
    for(x of t){
        if(x==' ')
            palabra+=1;
    }*/
    document.getElementById("pala").innerHTML=t.split(" ").length;
}