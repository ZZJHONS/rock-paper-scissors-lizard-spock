// Genera un número aleatorio entre un rango de entros
function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == papel || opcionMaquina == spock)
    {
        alert("Perdiste :( ");
    }
    else if(opcionMaquina == tijera || opcionMaquina == lagarto)
    {
        alert("Ganaste!");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra  || opcionMaquina == spock)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == tijera || opcionMaquina == lagarto)
    {
        alert("Perdiste!");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra || opcionMaquina == spock)
    {
        alert("Perdiste!");
    }
    else if(opcionMaquina == papel  || opcionMaquina == lagarto)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Empate!");
    }
}
else if(opcionUsuario == lagarto)
{
    if(opcionMaquina == papel || opcionMaquina == spock)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == tijera || opcionMaquina == piedra)
    {
        alert("Perdiste!");
    }
}
else if(opcionUsuario == spock)
{
    if(opcionMaquina == papel || opcionMaquina == lagarto)
    {
        alert("Perdiste!");
    }
    else if(opcionMaquina == piedra || opcionMaquina == tijera)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == spock)
    {
        alert("Empate!");
    }
}