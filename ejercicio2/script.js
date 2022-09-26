function version1() {
    let frase = prompt("Inserta cualquier frase");
    let counter = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === " ") {
            counter++;
        }
    }
    alert("Tu frase tiene " + (counter + 1) + " palabras");
}
// function version2() {
//     let frase = prompt("Inserta cualquier frase");
//     let counter = 0;
//     debugger;
//     for (let i = 0; i < frase.length; i++) {
//             if ((frase.charAt(i) === " " && frase.charAt(i + 1) === " ") || (frase.charAt(frase.length) === " "))
//             if (frase.charAt(i) === " ") {
//                 counter++;
//             }
//         } while (!((frase.charAt(i) === " " && frase.charAt(i + 1) === " ") || (frase.charAt(frase.length) === " ")));
        
//     }
//     alert("Tu frase tiene " + (counter + 1) + " palabras");
// }
//    // for (let i = 0; i < frase.length; i++) {
//     // switch (true) {
//     //     case (frase.charAt(i) === " "):
//     //         counter++;
//     //     case ((frase.charAt(i) === " " && frase.charAt(i+1) === " ") || (frase.charAt(frase.length) === " ")):
//     //         alert("Por favor utiliza los espacios correctamente");
//     //         break;