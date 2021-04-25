
// const names = require('./names');
// const total = require('./utils');
// const alternative = require('./alternative');
// require('./mindFunction');
// total('Galla');
// total(names.one);
// total(names.two);


const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newitems = _.flatMapDeep(items);
console.log(newitems);