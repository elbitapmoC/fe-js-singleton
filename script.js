let counter = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// For a singleton, it should only be able to be instantiated one time.
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

// Singletons are considered an ANTI-PATTERN and should be avoided in JS.
