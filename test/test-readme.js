import {ens_normalize, ens_tokenize} from '../index.js';

ens_normalize('🚴‍♂️.eth');

console.log(ens_tokenize('R💩\uFE0Fa\xAD./'));