(function (x){
    return function(y){
        return x*y;
    };
})(2)(3);

(function (x){
    return function(y){
        return function(z){
            return x+y+z;
        };
    };
})(1)(2)(3);

//
// : an
var abc=(function(){
    return{
        hello: function hello(){
            return 'Hello, world';
        }
    };
}())

abc.hello();

// una declaracion de funcion
function foo(){
    console.log('You foo!')
}

//una funcion anonima
var bar=function (){
    console.log('You bar!')
}

//una funcion IIFE
(function (){
    console.log('This function is ALSO invoked immediately!');
})();

//alternativa sintaxis
(function (){
    console.log('This function is ALSO invoked immediately!');
}());

//these have to be invocated
foo();
bar();
