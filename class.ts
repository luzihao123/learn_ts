class Animal {
  // name 前面可以加public private protected readonly修饰
  // 默认public  加了private则变成父类私有类 protected子类可以访问
  // readonly 修饰只能读 不能改
  // 静态方法 用static, 不用实例化可以调用
  protected name: string;
  static categoies: string[] = ['mammal', 'bird']
  static isAniaml(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run () {
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
console.log(Animal.isAniaml(snake))


class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}
const xiaobao = new Dog('xiaobao')

class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run () {
    return `Meow, `+ super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())

// interface用于定义不同类中共有的方法，供类实现
// 实现两个interface时候用,分割
interface Radio {
  switchRadio(): void;
}
// interface Battery {
//   checkBatteryStatus()
// }
// 接口之间继承关系
interface RadioWithBattery extends Radio{
  checkBatteryStatus()
}
class Car implements Radio{
  switchRadio() {}
}
class CellPhone implements RadioWithBattery{
  switchRadio() {}
  checkBatteryStatus(){}
}
