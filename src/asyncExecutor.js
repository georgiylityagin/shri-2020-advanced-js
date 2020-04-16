const asyncExecutor = (gen) => {
  const generator = gen();

  const handleNext = (value) => {
    const next = generator.next(value);

    if (next.done) return next.value;

    return next.value
      .then(handleNext)
      .catch(err => console.error(err))
      .finally(handleNext);
  }

  return Promise.resolve()
    .then(handleNext)
    .catch(err => console.error(err));
};


// тесты
const ID = 42;
const delayMS = 1000;

function getId () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ID);
        }, delayMS);
    });
}

function getDataById (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            id === ID ? resolve('🍎') : reject('💥');
        }, delayMS);
    });
}

asyncExecutor(function* () {
    console.log('%cТестирование функции asyncExecutor', 'color: red; font-size: 20px');
    console.time("Time");

    const id = yield getId();
    const data = yield getDataById(id);
    console.log('Data', data);

    console.timeEnd("Time");
});


// export { asyncExecutor };