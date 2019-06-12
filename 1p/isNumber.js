//isNumber(x)
//-> x
//<- true si es número
//<- false si no es número

//var isNumber = function (x)
function isNumber(x){
    if (typeof x === 'number')
	return true;
    else
	return false;
}
print (isNumber('j'));
print (isNumber(8));
