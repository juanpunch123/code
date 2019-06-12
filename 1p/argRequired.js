function argRequired(arg){
    if (arg===null)
	throw new Error('STOP IT, geet some help');
}
print (argRequired());
