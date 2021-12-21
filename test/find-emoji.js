import {readFileSync} from 'fs';
import {join} from 'path';
import {escape_unicode, explode_cp} from '../build/utils.js';

let base_dir = new URL('.', import.meta.url).pathname;

let labels = readFileSync(join(base_dir, 'data/eth-labels-20211127-134810-rx6ulbdm52rz.csv'), {encoding: 'utf8'}).split('\n').map(explode_cp);

let bad = [
	35,     42,   8252,   8265,
  8482,   8505,   9410,  12951,
 12953, 127489, 127490, 127514,
127535, 127538, 127539, 127540,
127541, 127542, 127543, 127544,
127545, 127546, 127568, 127569
];

for (let cp of bad) {
	let has = [];
	for (let label of labels) {
		if (label.includes(cp)) {
			has.push(label);
		}
	}
	if (has.length > 0) {
		console.log(cp.toString(16));
		console.log(has.map(cps => escape_unicode(String.fromCodePoint(...cps))));
	}
}