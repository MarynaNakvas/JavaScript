// function declaration

function square(number) {
  return number * number;
}


// function expression

// simple example
const square = function(number) { return number * number; };
const name = square(4);

// return global object window
// if 'use strict' return undefined
(function() {
  return this;
})();

// example with this
this.x = 9;
const module = {
  x: 81,
  getX: function() { return this.x; }
};
module.getX(); // 81
const getX = module.getX;
getX(); // 9, поскольку в этом случае this ссылается на глобальный объект
const boundGetX = getX.bind(module); // создаём новую функцию с this, привязанным к module
boundGetX(); // 81

const obj1 = {
  i: 10,
  c: function() {
    console.log(this.i, this);
  }
}
obj1.c(); // prints 10, Object {...}



// arrow function

// simple example
const func1 = x => x * x;
const func2 = (x, y) => { return x + y; };

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` указывает на объект Person
  }, 1000);
}

const p = new Person();


const f = () => { 'use strict'; return this; };
console.log(f()); // return global object window


var obj = {
  i: 10,
  b: () => console.log(this.i, this),
}
obj.b(); // prints undefined, Window {...} (или глобальный объект)


//Функции-генераторы
