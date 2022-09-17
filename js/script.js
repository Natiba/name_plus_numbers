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

let h1 = document.getElementById("h1").innerHTML = `React Codo a Codo`;
let h2 = document.getElementById("h2").innerHTML = `First practice Js`;
let subtitle = document.getElementById("subtitle").innerHTML = `Let's ask for a name plus two numbers, and get the result of adding the length of the name plus both numbers`;

/* ==== Functions ==== */

function user() {
    let userName = prompt("Your name goes here ");
    if (userName == null || userName == "") {
      alert("You have cancelled or your name is empty");
    } else {
      alert("Hello " + userName.toUpperCase() + ". Welcome to my page");
    }
    return userName;
  }
  
  function userLen() {
    let nameLen = user().length;
    console.log(nameLen);
    return nameLen;
  }
  
  function numberOne() {
    let numberOne = parseInt(prompt("Enter a number, please"));
    if (numberOne == null || numberOne == "") {
      alert("You have cancelled or your number is empty");
    } else {
      alert("Your first number is " + numberOne);
    }
    return numberOne;
  }
  
  function numberTwo() {
    let numberTwo = parseInt(prompt("Enter another number, please"));
    if (numberTwo == null || numberTwo == "") {
      alert("You have cancelled or your number is empty");
    } else {
      alert("Your second number is " + numberTwo);
    }
    return numberTwo;
  }
  
  function sumNumbers() {
    let sum = numberOne() + numberTwo();
    alert(`The sum of both numbers is ${sum}`);
    return sum;
  }
  
  function total() {
    let total = userLen() + sumNumbers();
    return total;
  }
  
  function answer() {
    let answer = (document.getElementById(
      "answer"
    ).innerHTML = `The result of sum your name letters plus your both numbers is: ${total()}`);
    return answer;
  }
  
  // falta funcion para limpiar una vez q me da el resultado
  
  function clean() {
    if (answer !== "") {
      answer === "";
    }
  }
  
  clean();
  
  /*
    function imprimir() {
      window.print();
    }
    */
  