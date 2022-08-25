import {heroes} from '../data/heroes.mjs';
//console.log(heroes);

// // Version 1
// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => {
//         if (heroe.id ===id) {
//             return true;
//         } else {
//             return false;
//         }
//     })
// }
// // Version 2
// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => (heroe.id ===id))
// }
// Version 3
const getHeroeById = (id) => heroes.find( (heroe) => (heroe.id ===id))
const getHeroesByOwner = (owner) => heroes.filter( (heroe) => (heroe.owner ===owner))

console.log(getHeroeById(2));
console.log(getHeroesByOwner('DC'));