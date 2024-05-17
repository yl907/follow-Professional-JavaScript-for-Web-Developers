// 1.basic inheritance(prototype chain)
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function() {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

// inherit from SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubType = function() {
  return this.subproperty;
};

let instance = new SubType();
console.log(`instance.getSuperValue(): ${instance.getSuperValue()}`); //true

// 2.Determine relationship between prototype and instance.
// 2.1.instanceof: if an object is a instance of a class.
console.log(`instance instanceof Object: ${instance instanceof Object}`); //true
console.log(`instance instanceof SuperType: ${instance instanceof SuperType}`); //true
console.log(`instance instanceof SubType: ${instance instanceof SubType}`); //true
// 2.2.isPrototypeOf(): 
console.log(`Object.prototype.isPrototypeOf(instance): ${Object.prototype.isPrototypeOf(instance)}`);
console.log(`SuperType.prototype.isPrototypeOf(instance): ${SuperType.prototype.isPrototypeOf(instance)}`);
console.log(`SubType.prototype.isPrototypeOf(instance): ${SubType.prototype.isPrototypeOf(instance)}`);

// 3.借用构造函数 constructor stealing
function SuperType2() {
  this.colors = ['red', 'blue', 'green'];
}

function SubType2() {
  // inherit SuperType
  SuperType2.call(this);
}

let instance2_1 = new SubType2();
instance2_1.colors.push('black');
console.log(instance2_1.colors); // red, blue, green, black

let instance2_2 = new SubType2();
console.log(instance2_2.colors); // red, blue, green

// 4.组合继承(将原型链和借用构造函数组合使用，应该是JavaScript最好的继承方式)
// 4.combination inheritance(combine prototype chain and constructor stealing, probably the best way of inheritance in JavaScript) 
function SuperType3(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

SuperType3.prototype.sayName = function() {
  console.log(`this.name" ${this.name}`);
}

function SubType3(name, age) {
  // 借用构造函数：继承属性
  // constructor stealing: inherit the attributes
  SuperType3.call(this, name);
  this.age = age;
}

// 原型链：继承方法
// prototype chain: inherit the methods
SubType3.prototype = new SuperType3();
SubType3.prototype.constructor = SubType3;
SubType3.prototype.sayAge = function() {
  console.log(this.age);
};


