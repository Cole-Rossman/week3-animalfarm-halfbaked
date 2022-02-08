import { animals } from '../data.js';
import { renderListItem, renderAnimal } from '../render-utils.js';

const infoDiv = document.getElementById('info');


console.log('hello animals');
console.log(window.location.search);

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const animal = animals.find((item) => item.id === params.get('id'));
console.log(animal);

const animalInfo = renderAnimal(animal);
infoDiv.append(animalInfo);


// const name = document.getElementById('name');
// name.id = animal.type;
// const says = document.getElementById('says');
// name.textContent = animal.name;

// says.textContent = animal.says;
