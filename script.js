'use strict';

class First {
  hello() {
    console.log(`Привет я метод родитея!`);
  }
}
class Second extends First {
  hello() {
    super.hello();
    console.log(`А я наследуемый метод!`);
  }
}
const start = new Second();
start.hello();
