function getUsuarioActivo( nombre){
    return {
        uid: 'IPK358',
        username: nombre
    };
};


const usuarioActivo = getUsuarioActivo('Aveo');
console.log( usuarioActivo);

const usuarioActivo2 = ( nombre)=>({
        uid: 'IPK358',
        username: nombre
})
console.log( usuarioActivo2('2010'));