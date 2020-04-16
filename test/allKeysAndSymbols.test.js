describe('Функция allKeysAndSymbols', function() {

  it ('Проверка пустого объекта без прототипа', function() {
    const obj = Object.create(null, {});

    assert.deepEqual(allKeysAndSymbols(obj), [], 'должен был вернуться пустой массив');
  })

  it ('Проверка пустого объекта', function() {
    const obj = {};
    objProtoKeys = Object.getOwnPropertyNames(Object.prototype);

    assert.deepEqual(allKeysAndSymbols(obj), objProtoKeys, 'должен был вернуться массив с методами из Object.prototype');
  })

  it ('Проверка объекта с цепочкой прототипов', function() {
    const symbol1 = Symbol("symbol 1");
    const symbol2 = Symbol("symbol 2");
    const symbol3 = Symbol("symbol 3");

    const objProto1 = {
      a: 1,
      [symbol1]: 'symbol 1'
    };

    const objProto2 = Object.create(objProto1, {
      b: { value: 'la' },
      [symbol2]: { value: 'symbol 2' },
    });

    const obj = Object.create(objProto2, {
      ownProp: { value: 'qwerty' },
      [symbol3]: { value: 'symbol 3' }
    });

    const expectedAns = ["ownProp", symbol3, "b", symbol2, "a", symbol1]
      .concat(Object.getOwnPropertyNames(Object.prototype));
    
    assert.lengthOf(allKeysAndSymbols(obj), expectedAns.length);
  })

})