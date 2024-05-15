// 1.组合使用构造函数模式和原型模式 combine constructor mode and prototype mode
function Person(name, age, job) {
  // private data
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ['Shelby', 'Court'];
}

Person.prototype = {
  // public method
  constructor: Person,
  sayName: function() {
    console.log(this.name);
  }
}

let person = new Person();
person.name = 'Rick';
person.sayName();

// 2.寄生构造函数模式 parasitic constructor mode
function SpecialArray() {
  // initiate original Array
  let values = new Array();

  // add value
  values.push.apply(values, arguments);

  // add method
  values.toPipedString = function() {
    return this.join('|');
  };
  
  // this is a SpecialArray object based on built-in Array.
  return values;
}
let colors = new SpecialArray('red', 'blue', 'green');
console.log(colors.toPipedString());
