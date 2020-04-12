// interface 定义对象   中间分隔使用分号
interface Person {
  name: string;
  age?: number;
  readonly id: number;
}

// 对象定义后属性不能多也不能少 可以改可选属性使用?
// 只读属性   readonly  只能在初始赋值, 类似于const  用户对象的属性
let vvv: Person  = {
  age: 123,
  name: '12313',
  id: 123
}

// error vvv.id = 444