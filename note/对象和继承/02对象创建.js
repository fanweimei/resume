/*
1. 构造函数模式
  创建一个新对象
  this指向这个新对象
  为这个新对象添加属性
  返回新对象
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function(){
    return this.name;
  }
}
Person.prototype.test = function(){
  console.log('test')
}
var p1 = new Person('a',1);
var p2 = new Person('b',2);
// console.log(p1.constructor == p2.constructor); //true
// console.log(p1.sayName == p2.sayName); //false
// console.log(p1.test == p2.test);  //true

/*
prototype
  默认会取得constructor属性指向自身
 */
// console.log(Person.prototype.isPrototypeOf(p1));  //true
// console.log(Object.getPrototypeOf(p1) == Person.prototype); //true

/*
hasOwnProperty: 检测一个属性是存在于实例中(false)，还是存在于原型中(true)
 */

// console.log(p1.hasOwnProperty('name')); //true
// console.log(p1.hasOwnProperty('test')); //false

// console.log(p1.prototype) //undefined
// console.log(Object.getOwnPropertyDescriptor(p1, 'test'));
// console.log(Object.getOwnPropertyDescriptor(Person.prototype,'test'));

/*
单独的in操作符：无论属性是在实例中还是在原型中都返回true
  hasOwnProperty和in操作符联合使用可以确定一个属性是否在原型中
 */
  //console.log('name' in p1); //true
  //console.log('test' in p1);  //true


var p3 = new Person('33',3);
Object.defineProperty(p3, 'str3', {
  value: '我是实例属性'
});
/*
遍历属性
  for-in: 所有的可枚举的属性（原型、实例）
  Object.keys()： 实例中可枚举的属性
  getOwnPropertyNames(): 实例中的所有属性
 */

// for(var attr in p3) {
//   console.log(attr); //['name','age','sayName','test']
// }
// console.log(Object.keys(p3)) //['name','age','sayName']
// console.log(Object.getOwnPropertyNames(p3)); //['name','age','sayName','str3']
// console.log(Object.getOwnPropertyNames(Person.prototype)); //[ 'constructor', 'test' ]
/*
每个实例都有一个指针指向原型，即使在实例之后为原型添加方法或属性，实例也可以访问到
 */
// Person.prototype.value = 100;
// console.log(p3.value); //100
/*
但如果把原型改为另一个对象，就切断了构造函数与实例之间的关系
 */
Person.prototype = {
  addr: 'bj'
}
// console.log(p3.addr); //undefined
