/*
Object.create()接受两个参数
  一个用作新对象原型的对象
  一个为新对象定义额外属性的对象，与Object.defineProperties()方法的第二个参数格式相同
 */
function inherit(subObj, supObj, options) {
  if(!Object.create) { //如果浏览不支持create方法
    function newObj() {}
    newObj.prototype = supObj.prototype;
    subObj.prototype = new newObj();
    subObj.prototype.constructor = subObj;
  }
  else {
    subObj.prototype = Object.create(supObj.prototype, {
      constructor: {
        value: subObj
      }
    });
  }

  Object.keys(options).forEach(function(attr){
    subObj.prototype[attr] = options[attr];
  });
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.friends = [];
}
Person.prototype.sayHi = function(){
  console.log('hello! I\'m '+this.name+',nice to meet everyone');
}
Person.prototype.showInfo = function(){
  return '姓名:'+this.name+', 年龄:'+this.age;
}

function Student(name, age, stuId, grade) {
  Person.call(this, name, age);
  this.stuId = stuId;
  this.grade = grade;
}
inherit(Student, Person, {
  showInfo: function(){
    return '姓名:'+this.name+', 年龄:'+this.age+', 学号：'
            +this.stuId+', 年级：'+this.grade;
  },
  addFriends: function(name){
    this.friends.push(name);
    console.log(this.friends);
  }
})

var per1 = new Person('Job', 22);
var stu1 = new Student('Mike', 10, 1, '五年级');
console.log(per1.showInfo());;
console.log(stu1.showInfo());;
stu1.sayHi();
stu1.addFriends('Job');

/*
判断类型
  instanceof
  Class.prototype.isPrototypeOf()
  obj.constructor == Class.prototype.constructor
  Object.getPrototypeOf(obj) == Class.prototype
 */
console.log(Student.prototype.isPrototypeOf(stu1)); //true
console.log(stu1 instanceof Student); //true
console.log(Object.getPrototypeOf(stu1) == Student.prototype); //true
console.log(stu1.constructor == Student.prototype.constructor); //true
console.log(Student.name); //Student
/*
小结：
  obj.hasOwnProperty(attr) ： attr只要是实例属性(可枚举或不可枚举)返回true
  attr in obj    ：只要存在这个属性（实例或原型链的、可枚举或不可枚举）都返回true
  for attr in obj     : 返回对象中可枚举的属性名（实例或原型链的）
  Object.keys(obj): 返回对象中实例的属性名（可枚举）
  Object.getOwnPropertyNames(obj) : 返回对象中实例的属性名（可枚举或不可枚举）

  对于普通的字面量对象，不分原型链上或实例上，都是可枚举的话，三种遍历属性的方法都可以。
 */
// console.log('------');
// var obj = {a: 1};
// Object.defineProperty(obj, 'b', {
//   value: 2
// })
// console.log(Object.getOwnPropertyDescriptor(obj, 'b'));
// console.log(Object.getOwnPropertyNames(per1));
