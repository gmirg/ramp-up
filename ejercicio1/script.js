function par_25() {
    let num1 = parseInt(prompt('Primer número:'));
    let num2 = parseInt(prompt('Segundo número:'));
    switch (true) {
        case ((num1 % 2 == 0) && (num1 % 25 == 0)) && ((num2 % 2 == 0) && (num2 % 25 == 0)):
            alert("Los dos números son pares y a la vez múltiplos de 25")
            break;
        case ((num1 % 2 == 0) && (num1 % 25 == 0)) && !((num2 % 2 == 0) && (num2 % 25 == 0)):
            alert("Solo el primer número es par y a la vez múltiplo de 25");
            break;
        case !((num1 % 2 == 0) && (num1 % 25 == 0)) && ((num2 % 2 == 0) && (num2 % 25 == 0)):
            alert("Solo el segundo número es par y a la vez múltiplo de 25");
            break;
        default: alert("Ninguno de los números es par y a la vez múltiplo de 25");
            break;
    }
}

function emp_term() {
var palabra = prompt('Inserta una palabra').toLocaleLowerCase();
var arr = (palabra.split("")); 
var empieza = arr[0];
var termina = arr[arr.length -1];
const letra = "a";
switch (true) {
    case (empieza === letra && termina === letra):
        alert("Tu palabra empieza y termina por a");
        break;
    case (empieza === letra && termina !== letra):
        alert("Tu palabra empieza por a");
        break;
    case (empieza !== letra && termina === letra):
        alert("Tu palabra termina por a");
        break;
    default: alert("Tu palabra no empieza ni termina por a");
        break;
}
}