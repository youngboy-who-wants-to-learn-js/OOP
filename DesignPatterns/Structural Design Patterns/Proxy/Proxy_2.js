function networkFetch(url) {
  return `${url} - ответ с сервера`;
}

const cache = new Set();

const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, argArray) {
    const url = argArray[0];
    if (cache.has(url)) {
      return `${url} - ответ из кэша`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, argArray);
    }
  },
});

console.log(proxiedFetch(`test.io`));
