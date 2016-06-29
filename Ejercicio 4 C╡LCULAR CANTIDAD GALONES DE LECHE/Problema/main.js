var d = 0;
var promedioUno = 0;
function btn41() {
	while(d < 5) {
		numero = Number(prompt("Porfavor ingresa tu número " + (d+1)));
		promedioUno = promedioUno + numero; // Se almacena la suma
		d++;
	}
	document.getElementById("ej41").innerHTML = "El promedio de tus números es " + promedioUno/5;
}
//Escribe aquí tu código