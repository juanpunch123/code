print('Ingresa 1ra variable: ');
var a=Number(readline());
print('Ingresa 2da variable: ');
var b=Number(readline());

print('Ingresa el readio: ');
var r=Number(readline());
var op=(a*a)+(b*b);
var h=Math.sqrt(op);

if(r>h)
    print('dentro');
if(r<h)
    print('afuera');
else
    print('sobre');
