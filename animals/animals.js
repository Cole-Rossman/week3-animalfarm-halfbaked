import { animals } from '../data.js';
import { renderAnimal } from '../render-utils.js';
import { findById } from '../utils.js';

const infoDiv = document.getElementById('info');


console.log('hello animals');
console.log(window.location.search);

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const animal = findById(id, animals);
console.log(animal);

const animalInfo = renderAnimal(animal);
infoDiv.append(animalInfo);


// const name = document.getElementById('name');
// name.id = animal.type;
// const says = document.getElementById('says');
// name.textContent = animal.name;

// says.textContent = animal.says;
