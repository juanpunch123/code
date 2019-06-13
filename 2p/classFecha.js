class Fecha{
 constructor(dia, mes, anio){
     
    this._dia=dia;
    this._mes=mes;
    this._anio=anio;

     if (typeof(dia)!= 'number'|| typeof(mes)!= 'number'||typeof(anio) != 'number')
     {
      throw("Introduce sólo números")
     }
        
     }
     DIA()
     {
         if(this._dia==31){
             this._dia=1;
         }
         if(this._mes==12){
             this._mes=1
         }
         if(this._anio==1999){
             this._anio++;
         }
         return("La fecha fue modificada a: " +this._dia+","+this._mes+","+this._anio+".");
     }
     incrementaDía()
     {
      día=día+1;
      if(día==32)
       {
         día = 1;
         mes = mes + 1;
         año = año + 1;

         if (mes>=13)
         {
             mes = 1;
         }
       }      
     }

     get día(){return this._día}
     set día(x){this._día=día;}

     get mes(){return this._mes}
     set mes(x){this._mes=mes;}

     get año(){return this._año}
     set año(x){this._anio=anio;}

 }