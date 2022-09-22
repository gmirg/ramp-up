function par_25() {
    let num1 = parseInt(prompt('Primer número:'));
    let num2 = parseInt(prompt('Primer número:'));
    debugger;
    if ((num1 % 2 == 0 && num1 % 25 == 0) && (num2 % 2 == 0 && num2 % 25 == 0)) {
        alert("Los dos números son pares y múltiplos de 25")
    } else {
        do {
            debugger;
            if ((num1 % 2 == 0 && num1 % 25 == 0) && !(num2 % 2 == 0 && num2 % 25 == 0)) { // num1 es par25 pero num2 no lo es
                alert("Solo el primer número es par y múltiplo de 25");
            } else { // num2 es par25 pero num1 no lo es
                alert("Solo el segundo número es par y múltiplo de 25");
            }
        } while ((num1 % 2 != 0 && num1 % 25 != 0) || (num2 % 2 != 0 && num2 % 25 != 0))
    }
}
function emp_term() {
var palabra = prompt('Inserta una palabra').toLocaleLowerCase();
var primeraLetra = (palabra.split("")); 
debugger; 
} 

// var cont = 0;
// for(var i = 0; i<palabra.length;i++){
//   if(letra=="frase.[0]){
//     cont++;
//   }
// }
// alert('La letra '+ letra + 'aparece '+ cont +' veces');