import {getHeroeById,getHeroesByOwner} from './08-imp-exp.mjs';

// const promesa = new Promise( (resolve,reject) =>{
//     setTimeout(()=>{
//         const heroe=getHeroeById(2);
//         console.log(`Después de 2 segundos: ${heroe.name}`);
//         //reject('Nada');
//         resolve(heroe.name);
//     }
//     ,2000);
// }
// );
// promesa.then((par_)=>{console.log('Óptimo: '+par_)})
// .catch((err)=>{console.warn('Eeeeca: '+err)});
const getHeroeByIdAsync = (id)=>{


    return new Promise( (resolve,reject) =>{
        setTimeout(()=>{
            const heroe=getHeroeById(id);
            if (heroe) {
                console.log(`Después de 2 segundos: ${heroe.name}`);
                resolve(heroe.name);
            } else {
                reject('Nada');
            }
                
            }
            ,2000);
        }
    )
};

getHeroeByIdAsync(15)
    // .then((par_)=>{console.log('Óptimo: '+par_)})
    // .catch((err)=>{console.warn('Eeeeca: '+err)});
    .then((par_)=>{console.log('Óptimo: '+par_)})
    .catch((console.warn));    