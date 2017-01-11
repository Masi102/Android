function konverter(){
	tal1=parseFloat(document.test.tal1.value);
	tal2=parseFloat(document.test.tal2.value);
}


function sum1(){
	konverter();
	var resultat =tal1+tal2;
document.test.kommentar.value=resultat;
}