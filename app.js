import { animals } from './data.js';
import { renderListItem } from './render-utils.js';

const ul = document.querySelector('.animal-list');

for (let animal of animals) {
    const animalDiv = renderListItem(animal);
    ul.append(animalDiv);
}
