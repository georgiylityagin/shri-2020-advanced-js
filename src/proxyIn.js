const proto = { value: 42 };
const object = Object.create(proto);

Object.defineProperty(object, 'year', {
    value: 2020,
    writable: true,
    configurable: true,
    enumerable: false,
});

const symbol = Symbol('bazzinga');
object[symbol] = 42;

console.log('%cТестирование proxy', 'color: red; font-size: 20px');
console.log('Тестируемый объект: ')
console.dir(object);

// без proxy
console.log('%cБез proxy:', 'color: blue')
console.log("'value' in object: ", 'value' in object); // true
console.log("'year' in object", 'year' in object); // true
console.log("symbol in object", symbol in object); // true

const proxy = new Proxy(object, {
  has (target, prop) {
    return target.hasOwnProperty(prop);
  }
});

// с proxy
console.log('%cС proxy:', 'color: blue')
console.log("'value' in proxy: ", 'value' in proxy) // false
console.log("'year' in proxy: ", 'year' in proxy); // true
console.log("symbol in proxy: ", symbol in proxy); // true