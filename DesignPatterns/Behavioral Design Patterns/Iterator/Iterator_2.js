class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0;
            return {
              value: void 0,
              done: true
            }
        }
      }
    }
  }
}

const iterator4 = new MyIterator(['a', 'b', 'c']);

for (const val of iterator4) {
  console.log('val:', val);
}

function* generator(collection) {
  let index = 0;
  while (index <  collection.length) {
    yield collection[index++];
  }
}

const gen = generator(['a', 'b', 'c'])
for (const val of gen) {
  console.log('val:', val);
}

gen.next().value
