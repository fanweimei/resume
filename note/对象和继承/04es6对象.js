let bds = '我是表达式'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    return '姓名：'+this.name+', 年龄：'+this.age;
  }
  sayHi(){
    console.log('hello everyone! my name is '+this.name);
  }
  [bds]() {
    console.log('我是表达式');
  }
}
/*
构造函数的prototype属性，在es6的“类”上面继续存在。
类的所有方法都定义在类的prototype属性上面
如果不是使用this显示定义的属性，则是定义在prototype上
 */
console.log(typeof Person); //function
console.log(Person == Person.prototype.constructor); //true
let per1 = new Person('per1', 1);
let per2 = new Person('per2', 2);
console.log(per1.sayHi == per2.sayHi); //true
/*
Object.assign()方法可以很方便地一次向类添加多个方法
 */
Object.assign(Person.prototype, {
  getName() {
    return this.name;
  },
  getAge(){
    return this.age;
  }
})
console.log(per1.getName()); //per1
Person.prototype.test = function(){
  console.log('test');
}
/*
与es5不同点：
 (1)类内部定义的方法是不可枚举的，外部定义的方法仍然是可枚举的
 */
// console.log(Object.keys(per1)); //['name', 'age']
// console.log(Object.getOwnPropertyNames(per1)); //['name', 'age']
// for(var attr in per1) {
//   console.log(attr); //['name', 'age', 'getName', 'getAge', 'test']
// }
// console.log(Object.getOwnPropertyNames(Person.prototype)); //[ 'constructor', 'showInfo', 'sayHi', 'getName', 'getAge', 'test' ]
/*
(2)类的属性名可以采用表达式
 */
//per1[bds]()
/*
(3)不存在类提升：需要先定义类，再实例化类，不然会报错
 */

/*
私有方法或属性：
  通过下划线
  通过#（目前只是提案）
 */

/*
this指向
 */
class Logger {
  constructor(name) {
    this.name = name;
    //this.print = this.print.bind(this);
  }
  print(name) {
    console.log('hello '+this.name);
  }
}
const logger = new Logger('log');
const { print } = logger;
//print(); //报错
/*
解决方法：
  constructor中绑定this
  使用箭头函数
 */

console.log(Person.name); //Person 同es5

/*
同es5: 取值函数和存值函数
 */
class MyClass {
  constructor(prop) {
    this.prop = prop;
  }
  get prop() {
    return 'getter';
  }
  set prop(value){
    console.log('setter:'+value);
  }
}
let inst = new MyClass();
console.log(inst.prop);
inst.prop = 10;

/*
实例属性的写法：
  constructor中this.属性名 = 属性值 （还在测试阶段）
  类中属性名 = 属性值
静态属性：
  类名.属性名
  在内部属性前加static static 属性名 = 属性值 （还在测试阶段）
静态方法：
  方法名前加static

静态属性和静态方法只能通过类名.的方式来访问；
静态方法中的this指的是类，所以静态方法中只能访问静态方法和静态属性
 */

/*
new.target： 判断实例是否通过new命令调用的
（es6只能通过new命令创造实例）
可以用于es5的判断
 */
function Target() {
  console.log(new.target == Target);
}
let tar = new Target(); //true
let tar2 = Target.call(tar); //false
