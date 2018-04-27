import {sum} from './lib/sum.js';
import {divide} from './lib/divide.js';

const res = sum(1, 2) +  divide(5, 3);

console.log(res);

(async () => {
    console.log(1);
    console.log(2);
})();
