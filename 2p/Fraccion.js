class Fraccion{
	constructor(n,d){
	    this.n=d;
	    this.d=d;
	};
    euclides(n,d){return d;};
    sum(f){};
    subt(f){};
    div(f){};
    mul(f){
	var n=this.n*f.n;
	var d=this.d*f.d;
	//Euclides
	return new Fraccion(n,d);
    };
};
