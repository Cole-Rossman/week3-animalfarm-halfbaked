import { animals } from '../data.js';
import { findById } from '../utils.js';

console.log('hello animals');
console.log(window.location.search);

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const animal = animals.find((item) => item.id === params.get('id'));
console.log(animal);

const name = document.getElementById('name');
name.id = animal.type;
const says = document.getElementById('says');
name.textContent = animal.name;
says.textContent = animal.says;
