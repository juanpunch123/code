class Vector{
    constructor(A){}
    initialize(){}
    min(arr){
        let t=arr[0];
        for(var x of arr){
            if(t>x)
                t=x;
        }
        return(t);
    }
    max(arr){
        let t=arr[0];
        for(var x of arr){
            if(t<x)
                t=x;
        }
        return(t);
    }
    sum(){
        
    }
    vectorize(){
        let t=arr[0];
        for(var x of arr){
            if(t<x)
                t=x;
        }
        return(t);
    }
}