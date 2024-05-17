// 1.一个坏的递归例子
// 1.a bad example of recursion
// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// let anotherFactorial = factorial;
// factorial = null;
// console.log(anotherFactorial(4)); // Uncaught TypeError: factorial is not a function

// 2. 代码块中的arguments.callee就等于主动调用该代码块的函数名
// 2.'arguments.callee' represent the 'calling function'
function factorial(num){ 
  if (num <= 1){ 
      return 1; 
  } else { 
      return num * arguments.callee(num-1); 
  } 
} 

let anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4));

// 3.闭包: 闭包是指有权访问另一个函数作用域中变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数
// 3.closure
function outerFunction(propertyName) {
  return function innerFunction(object1, object2) {
    // below two line of code can use variable 'propertyName', no matter if 'innerFunction' is returned to another variable and then called. Because the 'scope chain' of innerFunction is including its own scope and outerFunction scope.
    let value1 = object1[propertyName];
    let value2 = object2[propertyName];
    
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}

let compareNames = outerFunction('name');
let result = compareNames({name: 'Nicholas'}, {name: 'Greg'});
console.log(result);
// Note: below two line of code shows that only 'propertyName' is existing all the time. value1 and value2 is different in different calling.
// let anotherResult = compareNames();
// console.log(anotherResult);  //Uncaught TypeError TypeError: Cannot read properties of undefined (reading 'name')