//Encontrar el mínimo, dijo máximo xD
let arr = [2, 3, -4, 5, 6];

let t = arr[0]//2
for(let x of arr)
{
    if (t>x)
    t=x
}
console.log(t);