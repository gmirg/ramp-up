let frase = prompt("Inserta cualquier frase");
let counter = 0;
for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === " ") {
            counter++;
    }
}
alert("Tu frase tiene " + (counter + 1) + " palabras"); 