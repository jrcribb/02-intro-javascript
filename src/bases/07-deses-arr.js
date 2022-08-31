const retornaArreglo = ()=>{
    return ['ABC',123]
};

const [letras,numeros] = retornaArreglo();
console.log(letras)
console.log(numeros);

const useState = (valor)=>{
    return [valor,()=>{console.log('Hola amigos')}];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre,setNombre] = useState('Ana');
console.log(nombre);
setNombre();