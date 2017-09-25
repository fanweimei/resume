/*
extends:
  子类必须在constructor方法中调用super方法，否则会报错
  切必须在调用super之后使用this
 */
class Point {
  constructor(x, y) {
    console.log(new.target.name);
    this.x = x;
    this.y = y;
  }
}
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }
  getXY(){

  }
}
let point = new Point(1,2); //Point
/*
尽管new.target是在父类中调用，但是创建子类实例，仍然是指向子类
 */
let colorPoint = new ColorPoint(3, 4, 'red'); //ColorPoint

/*
super:
  构造函数中调用super()
  super.
    通过super.调用父类的属性或方法，只能是原型链的属性或方法
    通过super.调用父类的方法，super会绑定子类的this
    子类的静态方法中通过super.也是调用父类的静态方法
super代表父类或父类的实例，同时会将子类的this绑定过去
*/
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}
class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
}
let b = new B();
b.print(); //2

/*
es5中内置的原生构造函数不能被继承
es6方法中可以
 */
function MyArray() {
  Array.call(this, arguments);
}
var arr = new MyArray();
arr[0] = 'red'
console.log(arr.length); //undefined

class MyArray2 extends Array{
  constructor() {
    super();
  }
}
let arr2 = new MyArray2();
arr2.push('red');
console.log(arr2);
