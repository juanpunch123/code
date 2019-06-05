//export
class Car{
    constructor(name){
        this.name=name;
    }
    drive(){}
    start(){return this.name+' enging started...'+'\n';}
    toString(){return 'Hola que tal, me llamo Angel'}
}
export {Car}