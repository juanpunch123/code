class Point {
    constructor(x,y){
		if ((typeof x == 'undefined') && (typeof y == 'undefined')){
			this._x = 0;
			this._y = 0;
		} else {
			this._x = x;
			this._y = y;
		}
	};
    toString(){
	return"("+this._x+","+this._y+")";
    };
    distancia(p1,p2) {
		var d1 = p2.x - p1.x;
		var d2 = p2.y - p1.y;
		d1 = d1 ** 2;
		d2 = d2 ** 2;
		return Math.sqrt(d1+d2);
	};
	clone() {return new Point (this._x, this._y);};
}

