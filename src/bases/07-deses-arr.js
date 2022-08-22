const retornaArreglo = ()=>{
    return ['ABC',123]
};

const [letras,numeros] = retornaArreglo();
console.log(letras)
console.log(numeros);

const useState = (valor)=>{
    return [valor,()=>{console.log('Hola amigos')}];
}

const [nombre,setNombre] = useState('Ana');
console.log(nombre);
setNombre();