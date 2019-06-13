class Robot {
    constructor(name){
	this.name = name;
    };

    speak(){
	console.log('Hello Master');
    };
    makeCoffee(){
	console.log('making coffee');
    };
    blinkLight(){
	console.log('*blinks*');
    };
};

var a = new Robot('aRobot');
