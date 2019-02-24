function juegacadena(palabra){
    //verificar palindromo
    var p  = palabra.split("");

    var preves = p.reverse();
    var preves2 =  preves.join("");
    var p1 = preves2.toLowerCase();
    var p2 = palabra.toLowerCase();
    var pal;
    //

    //cuenta palabras y letras
    var cuentap =  palabra.split(" ");
    var cuentap2 = cuentap.length;
    var cuental = cuentap.join("");
    var cuental2 = cuental.length;
    //

    //numero de vocales
    var cuentav = cuental.match(/[aeiou]/gi);
    var cuentav2 = cuentav === null ? 0 : cuentav.length; 
    //

    //numero de consonantes
    var cuentacons = cuental.match(/[BCDFGHJKLMNÑPQRSTVWXYZ]/gi);
    var cuentacons2 = cuentacons === null ? 0 : cuentacons.length;
    //

    
    if(p1 == p2){
     pal = "Es Palindromo"
     
    }

    else{
        pal = "No es Palindromo";
    }

    var conjunto = (pal+"\n"+"Numero de Palabras = "+cuentap2+"\n"+
    "Numero de Letras = "+cuental2+"\n"+"Numero de vocales = "+
    cuentav2+"\n"+"Numero de Consonantes = "+cuentacons2);


    return conjunto;

}

module.exports = juegacadena;