var arr=[2,3,-4,5,6];

function max(arr){
    let t=arr[0];
    for(var x of arr){
        if(t<x)
            t=x;
    }
    return(t);
}
function min(arr){
    let t=arr[0];
    for(var x of arr){
        if(t<x)
            t=x;
    }
    return(t);
}

/*let t=arr[0]
for(var x of arr){
    if(t>x)
        t=x;

}*/