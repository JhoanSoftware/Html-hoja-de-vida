
let i = 0;

while (i !== 2) {
    let nombre = prompt("ingrese su nombre");
let edad = parseInt(prompt("ingrese su edad"));
    if (edad >= 0 && edad <= 10) {
        alert (`hola ${nombre} clasificacion es niño`);
    } else if (edad >= 11 && edad <= 18) {
        alert (`hola ${nombre} clasificacion es adolescente`);
    } else if (edad >= 19 && edad <= 35) {
        alert (`hola ${nombre} clasificacion es adulto`);
    }else if (edad>= 36 && edad <= 60) {
        alert (`hola ${nombre} clasificacion es maduro`); 
    }else {
        alert (`hola ${nombre} clasificacion es anciano`);
    }
 i= parseInt(prompt("desea continuar? |1 si | 2 no"));

}

