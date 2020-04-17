class MySet {

  *[Symbol.iterator]() {
    for (let elem of this.data) {
      yield elem;
    }
  }

  constructor(iterable) {
    this.data = [];
    this.size = 0;

    for (let elem of iterable) {
      if (!this.data.includes(elem)) {
        this.data.push(elem);
        this.size++;
      }
    }
  }

  keys () {
    return this.data;
  }

  values() {
    return this.data;
  }

  entries() {
    return this.data.map(elem => [elem, elem]);
  }

  clear() {
    this.data.splice(0, this.data.length);
    this.size = 0;
  }

  add(elem) {
    if (!this.data.includes(elem)) {
      this.data.push(elem);
      this.size++;
    }
  }

  delete(elem) {
    const pos = this.data.findIndex(current => current === elem);

    if (pos !== -1) {
      this.data.splice(pos, 1);
    }
  }

  has(elem) {
    return this.data.includes(elem);
  }

}


// тесты
console.log('%cТестирование собственной реализации множества Set', 'color: red; font-size: 20px');

const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

// хранит только уникальные значения
console.log('%cХранит только уникальные значения:', 'color: blue')
console.log([...set]); // [ 4, 8, 15, 16, 23, 42 ]

// есть свойство size
console.log('%cЕсть свойство size:', 'color: blue')
console.log(set.size); // 6

// работает в цикле for-of
console.log('%cРаботает в цикле for-of:', 'color: blue')
for (const item of set) {
  console.log(item); // 4 8 15 16 23 42
}

// есть методы keys, values, entries
console.log('%cEсть методы keys, values, entries:', 'color: blue')
for (const item of set.entries()) {
  console.log(item); // [ 4, 4 ] [ 8, 8 ] ...
}

// есть метод clear
console.log('%cЕсть метод clear:', 'color: blue')
set.clear();
console.log(set.size); // 0

const obj = {
  getValue () { return this.value }
}

const data = {
  value: 42
}

// есть метод add
console.log('%cЕсть метод add:', 'color: blue')
set.add(obj);
set.add(data);
console.log([...set])

// есть метод delete
console.log('%cЕсть метод delete:', 'color: blue')
set.delete(data);
console.log([...set])

// есть метод has
console.log('%cЕсть метод has:', 'color: blue')
console.log(set.has({})); // false
console.log(set.has(obj)); // true
console.log(set.has(data)); // false

// и кое-что еще
console.log('%cКое-что еще:', 'color: blue')
console.log('set === set.valueOf() ', set === set.valueOf()) // true
console.log('String(set) ', String(set)) // [object MySet]
console.log('Object.prototype.toString.call(set) ', Object.prototype.toString.call(set)) // [object MySet]
