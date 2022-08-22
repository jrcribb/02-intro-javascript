const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    latlng: {
        lat: 14.28,
        lng: 10.11,
    }
}

const retornaPersona = ({clave, nombre, edad, rango='Capitán'})=> {
    return {nombreClave: clave, anios: edad }
}
const useContext = ({clave, latlng, nombre, edad, rango='Capitán'})=> {
    return {nombreClave: clave, anios: edad , latlng}
}
//const avenger = retornaPersona(persona);
//console.log( avenger)
// const {nombreClave,anios} = retornaPersona(persona);
//console.log(nombreClave,anios);
const {nombreClave,anios, latlng: {lat,lng}} = useContext(persona);
console.log(nombreClave,anios,lat,lng);
//