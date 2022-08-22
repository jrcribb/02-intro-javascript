const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 99,
    direccion: {
        ciudad: 'New York',
        zipcode: 1081,
    }
}

const otra_persona = {...persona};
otra_persona.nombre = 'Ynot';
console.log(persona);
console.log(otra_persona);