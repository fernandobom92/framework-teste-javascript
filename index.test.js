const assert = require('assert');
const { forEach, map } = require('./index');

const test = (desc, fn) => {
    console.log('---->', desc);
    try {
        fn();
    } catch (err) {
        console.log(err.message);
    }
};

test('The forEach function', () => {
    let soma = 0;
    forEach([1,2,3], valor => {
        soma = soma + valor;
    });
    
    assert.strictEqual(soma, 6, 'o valor da soma deveria ser 6');
});

test('The map function', () => {
    const result = map([1,2,3], value => {
        return value * 2;
    });

    assert.deepStrictEqual(result, [2, 4, 6]);
});