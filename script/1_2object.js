// 1.原型链的一个例子，当前对象中无法找到的属性，会去原型中查找，如果还是没有，会继续查找原型的原型，直到为空(null)。 
// a example of prototype chain
function Person() {
}

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function() {
  console.log(`prototype: ${this.name}`);
}

let person1 = new Person();
let person2 = new Person();

person1.name = 'Greg';
console.log(`person1(has own name): ${person1.name}`);  // Greg
console.log(`person2(use name in prototype): ${person2.name}`); // Nicholas

// 2.hasOwnProperty() -- check if this property value is from the object, or is it from the prototype.
console.log(`person1.hasOwnProperty('name'): ${person1.hasOwnProperty('name')}`)  // true
console.log(`person2.hasOwnProperty('name'): ${person2.hasOwnProperty('name')}`)  // false

// 3.in -- whether or not a property is in an object or its prototype chain.
console.log(`'name' in person1: ${'name' in person1}`)  // true
console.log(`'name' in person2: ${'name' in person2}`)  // true

// 4.hasPrototypeProperty() -- (not a built-in method)
function hasPrototypeProperty(object, name){ 
  return !object.hasOwnProperty(name) && (name in object); 
} 
console.log(`hasPrototypeProperty(person1, 'name'): ${hasPrototypeProperty(person1, 'name')}`)  // false
console.log(`hasPrototypeProperty(person2, 'name'): ${hasPrototypeProperty(person2, 'name')}`)  // true

// 5.Object.keys() -- check all the keys in an object
