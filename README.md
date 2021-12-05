# ens-normalize.js
1-file, 0-dependancy Compact ES6 Ethereum Name Service (ENS) Name Normalizer.

* Uses latest specification: [UTS-46 v14.0.0](https://unicode.org/reports/tr46/)
* Handles [ZWNJ](https://datatracker.ietf.org/doc/html/rfc5892#appendix-A.2)/[ZWJ](https://datatracker.ietf.org/doc/html/rfc5892#appendix-A.2) in `ContextJ`
* Handles [Emoji ZWJ Sequences](https://unicode.org/emoji/charts/emoji-zwj-sequences.html)
* Handles [Punycode](https://datatracker.ietf.org/doc/html/rfc3492), adapted from [mathiasbynens/punycode.js](https://github.com/mathiasbynens/punycode.js)

---

* [Live Demo](https://raffy.antistupid.com/eth/ens-resolver.html)
* Generated Report: [Unicode IDNATestV2](https://adraffy.github.io/ens-normalize.js/test/output/idna.html)
* Generated  Report: [eth-ens-namehash/normalize](https://adraffy.github.io/ens-normalize.js/test/output/ens.html)


```Javascript
import {ens_normalize} from '@adraffy/ens-normalize';
// browser: 
// 'https://unpkg.com/@adraffy/ens-normalize@latest/dist/ens-normalize.min.js'

// example:
let normalized = ens_normalize('🚴‍♂️.eth'); // throws if error
// this value is ready for hashing

// optional argument: ignore_disallowed (default: false)
// when truthy, disallowed characters are ignored 
console.log(ens_normalize('_', true)); // === ''
console.log(ens_normalize('_'));       // throws: disallowed

// errors:
// - not a string
// - contains disallowed character if !ignore_disallowed
// - puny decode failure
// - puny decode mismatch
// - label has double-hyphen at [3:4]
// - label starts/ends with hyphen
// - label starts with combining mark

// note: does not enforce .eth TLD 3-character minimum
```

---

## Build Notes

* Clone to access `build/`.  These files are not included in the npm version.
* The actual source is in `build/ens-normalize.js`.
* Use `npm run dist` to build the injected and minified versions.