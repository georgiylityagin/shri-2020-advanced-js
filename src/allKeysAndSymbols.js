export default (object) => {
  let ownKeysAndSymbols = [].concat(
    Object.getOwnPropertyNames(object),
    Object.getOwnPropertySymbols(object)
  );
  let prototype = Object.getPrototypeOf(object);
  let allKeysAndSymbols = [...ownKeysAndSymbols];

  while (prototype !== null) {
    allKeysAndSymbols = allKeysAndSymbols.concat(
      Object.getOwnPropertyNames(prototype),
      Object.getOwnPropertySymbols(prototype)
    )

    prototype = Object.getPrototypeOf(prototype);
  }

  return allKeysAndSymbols;
};