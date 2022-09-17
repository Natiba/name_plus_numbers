//Ejercicio (Investigar parseINT y ParseFLoat )

// Crear un programa que haga lo siguiente:
// pedir el nombre al usuario/a .
// pedir un numero al usuario/a .
// pedir otro numero

//devolver un alerta que diga (Hola (nombre de usuario/a) bienvenid@ a la pagina);
// otro alerta que diga el resultado de los dos numeros ingresados es (resultado);
// escribe en pantalla: "el resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es: (resultado de la suma + las letras de su nombre)"

//let btnName = (document.getElementById("btnName").innerHTML = `
//Enter your name, please
//`);
//let btnNumbers = (document.getElementById("btnNumbers").innerHTML = `
//Insert two numbers, please
//`);
//let btnNumber2 = (document.getElementById("btnNumber2").innerHTML = `
//Insert another number, please
//`);

let user = prompt("Ingresa tu nombre por favor");
let numberOne = parseInt(prompt("Ingresa un número por favor"));
let numberTwo = parseInt(prompt("Ingresa otro número por favor"));
let userLen = user.length;
console.log(`Longitud del nombre: ${user} = ${userLong}`);
let sum = numberOne + numberTwo;
console.log(`La suma de los numeros ${numberOne} + ${numberTwo} = ${sum}`);
let result = userLen + sum;
console.log(result);

alert("Hola " + user + " Bienvenid@ a la página")
alert(`El resultado de los numeros ingresados es: ${numberOne} y ${numberTwo}`);

document.write(
  `El resultado de la suma de tus números (${numberOne} y ${numberTwo}), mas la cantidad de las letras de tu nombre (${user} = ${userLong}) es: ${result}`
);