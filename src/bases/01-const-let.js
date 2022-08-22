console.log('Muy básico...');
const nombre = 'Jorge';
const apellido = 'Cribb';
let valorDado = 6; // El ambito de valorDado es el SCRIPT
if (valorDado > 4) {
    let valorDado = 4; // El ambito de esta variable es acotado al IF
    console.log(valorDado); // Aqui se usa la variable valorDado de ambito mas especifico
} // En este punto se destruye la variable valorDado de ambito propio al IF
console.log(nombre, apellido, valorDado);
