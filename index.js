// function declaration
function summFD(a, b) {
  return a + b;
}

// function expression
const summFE = function(a, b) {
  return a + b;
};
const name = summFE(4);

// arrow function
const double = a => 2 * a;
const summFA = (a, b) => {
  return a + b;
};

// global
console.log(this); // return global window object

// function
function functionDeclaration() {
  return this; // return global window object // if 'use strict' return undefined
}

(function() {
  return this; // return global window object // if 'use strict' return undefined
})();

const f = () => {
  return this; // return global window object // if 'use strict' also
}; 

// object
const functionExpression = {
  count: 10,
  showCount: function() {
    return this.count;
  }
}
functionExpression.showCount(); // return 10, this = Object {...}

const functionArrow = {
  count: 10,
  showCount: () => {
    return this.count;
  },
}
functionArrow.showCount(); // return undefined, this = global window object

// class
function ClassFE() {
  this.age = 0;

  setInterval(function() {
    this.age++; // this = global window object
  }, 1000);
}
const newFE = new ClassFE();

function ClassFA() {
  this.age = 0;

  setInterval(() => {
    this.age++; // this = ClassFA {...}
  }, 1000);
}
const newFA = new ClassFA();

// loop
const jow = [5, 10, 45, 67];

jow.forEach(function(v, i){
  // console.log(this); // this = global window object 
    this[i] = v + 1;
});

jow.forEach(function(v, i){
    this[i] = v + 1;
    // console.log(this); // this = jow 
}, jow);

jow.forEach((v, i) => {
  // console.log(this); // this = global window object
  return this[i] = v + 1;
});

jow.forEach((v, i) => {
  console.log(this); // this = global window object
  return this[i] = v + 1;
}, jow);



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

//Функции-генераторы
