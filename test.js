import assert from 'assert';
import * as Maybe from './index';

function safeDivide(n) {
    return (d) => (d === 0) ?
        Maybe.Nothing() :
        Maybe.Just(n / d);
}
function inc(x) {
    return x + 1;
}
function get (m, orElse) {
  return m(x => x, x => orElse);
}

const okVal = get(Maybe.fmap(Maybe.bind(Maybe.Just(2), safeDivide(10)), inc));
const nothingVal = get(Maybe.fmap(Maybe.bind(Maybe.Just(0), safeDivide(10)), inc));

assert.equal(okVal, 6);
assert.equal(nothingVal, undefined);

console.log('All tests passed!');
