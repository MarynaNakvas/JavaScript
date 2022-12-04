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
const doubleFA = a => 2 * a;
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

const functionArrow = () => {
  return this; // return global window object // if 'use strict' also
}; 

// object
const objectFD = {
  count: 10,
  showCount: function showThisCount() {
    return this.count;
  },
}
objectFD.showCount(); // return 10, this = Object {...}

const objectFE = {
  count: 10,
  showCount: function() {
    return this.count;
  }
}
objectFE.showCount(); // return 10, this = Object {...}

const newObject = {
  count: 20,
}

const showCountBind = objectFE.showCount.bind(newObject);
showCountBind(); // return 20, this = newObject {...}

const showCountCall = objectFE.showCount.call(newObject);
const showCountApply = objectFE.showCount.apply(newObject);
showCountCall; // return 20, this = newObject {...}
showCountApply; // return 20, this = newObject {...}

const objectFA = {
  count: 10,
  showCount: () => {
    return this.count;
  },
}
objectFA.showCount(); // return undefined, this = global window object

// class
class ClassFD {
  constructor(name) {
    this.name = name;
  }

  showName = function showThisName() {
    return this.name;
  }
}
const newFD = new ClassFD("Katya"); // return "Katya", this = ClassFD
const showKateName = newFD.showName;
showKateName(); // return error: function showThisName cannot read props name of undefined

const showKateNameBind = showKateName.bind(newFD);
showKateNameBind(); // return "Katya", this = ClassFD

class ClassFE {
  constructor(name) {
    this.name = name;
  }

  showName = function() {
    return this;
  }
}
const newFE = new ClassFE("Pasha"); // return "Pasha", this = ClassFE

class ClassFA {
  constructor(name) {
    this.name = name;
  }

  showName = () => this.name
}
const newFA = new ClassFA("Petr"); // return "Petr", this = ClassFA

// loop
const array = [5, 10, 45, 67];

array.forEach(function(v, i) {
  return this[i] = v + 1;     // this = global window object 
});

array.forEach(function(v, i) {
  return this[i] = v + 1;    // this = array 
}, array);

array.forEach((v, i) => this[i] = v + 1);    // this = global window object 
