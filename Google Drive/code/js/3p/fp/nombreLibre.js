let asignacion= function(list){
    return list.map(function(element){
        if(element=='a'){
            a=3;
            return a;
        }
        if(element=='b'){
            b=2;
            return b;
        }
        if(element=='c'){
            c=1;
            return c;
        }
    });
};

let a=['bacbabcabcba'];
console.log(asignacion(a));