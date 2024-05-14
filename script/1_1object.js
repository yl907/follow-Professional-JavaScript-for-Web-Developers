// 1.工厂模式 factory mode
function createPerson(name, age, job) {
  // we create 'o' as an object, 
  // and we assign it, 
  // and we return it.
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(`1.${this.name}`);
  }
  return o;
}

let onePerson = createPerson('Nicholas', 29, 'Software Engineer');
onePerson.sayName();

// 2.构造函数模式 constructor mode
function Person1(name, age, job) {
  // use 'this', which makes 'Person1' actually a type.
  // through 'instanceof' function, you will see it.
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(`2.${this.name}`);
  }
}

let person1 = new Person1('Nicholas', 29, 'Software Engineer');
console.log(`person1 instanceof Person1?  :${person1 instanceof Person1}`);
person1.sayName();

// 3.原型模型 prototype mode
function Person2() {
}
Person2.prototype.name = 'Nicholas';
Person2.prototype.age = 29;
Person2.prototype.job = 'Software Engineer';
Person2.prototype.sayName = function() {
  console.log(`3.${this.name}`);
};

let person2 = new Person2();
person2.sayName();
