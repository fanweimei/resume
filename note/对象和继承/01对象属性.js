/*
1. 属性类型：数据属性、访问器属性
数据属性：4个描述其行为的特性
  configurable: 是否能通过delete删除其属性
  enumerable: 能否通过for-in循环返回属性值
  writebale: 能否修改属性的值
  value: 属性的数据值
  如果直接在对象上定义属性，前三个默认是true, value默认是undefined。
 */
/*
数据属性：要修改属性的默认特性，必须使用defineProperty()方法
 */
/*
读取属性的特性：Object.getOwnPropertyDescriptor()
 */
var person = {
  name: 'fanfan'
}
//delete person.name;
//console.log(Object.getOwnPropertyDescriptor(person, 'name'));
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'weiwei'
});
/*
调用了defineProperty方法，不写的特性，默认就是false
一旦configurable设置为false，就不能再修改回true了
 */
//console.log(Object.getOwnPropertyDescriptor(person, 'name'));

/*
访问器属性：
  configurable
  enumerable
  get: 读取属性时调用
  set: 设置属性时调用
 */
Object.defineProperty(person, 'age', {
  configurable: true,
  set: function (val){
    this.age = val;
  },
  get: function(){
    return 18;
  }
});
//console.log(person.age);
//console.log(Object.getOwnPropertyDescriptor(person, 'age'));

/*
同时定义多个属性
 */

Object.defineProperties(person, {
  score: {
    value: 100
  },
  interesting: {
    get: function(){
      return 'swimming'
    }
  }
});
console.log(person.interesting);
