function par_25() {
    let num1 = parseInt(prompt('Primer número:'));
    let num2 = parseInt(prompt('Segundo número:'));
    switch (true) {
        case ((num1 % 2 == 0) && (num1 % 25 == 0)) && ((num2 % 2 == 0) && (num2 % 25 == 0)):
            alert("Los dos números son pares y múltiplos de 25")
            break;
        case ((num1 % 2 == 0) && (num1 % 25 == 0)) && !((num2 % 2 == 0) && (num2 % 25 == 0)):
            alert("Solo el primer número es par y múltiplo de 25");
            break;
        case !((num1 % 2 == 0) && (num1 % 25 == 0)) && ((num2 % 2 == 0) && (num2 % 25 == 0)):
            alert("Solo el segundo número es par y múltiplo de 25");
            break;
        default: alert("Ninguno de los números es par y múltiplo de 25");
            break;
    }
}

// function emp_term() {
// var palabra = prompt('Inserta una palabra').toLocaleLowerCase();
// var arr = (palabra.split("")); 
// var primeraLetra = arr
// }
// alert();
// // Mi intención era extraer la primera y última letra de la palabra y mediante condicionales simples dar el resultado si empieza y termina por A,
// //si empieza por A, si termina por A, o si no empieza ni termina por A. 