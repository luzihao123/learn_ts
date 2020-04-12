// error  let isDone: boolean = 123
// 类型错误会直接报错
let isDone: boolean = false
let age: number = 123
let binaryNumber: number = 0b1111
let firstName: string = 'vi'
let message: string = `hello ${firstName}, age is ${age}`

// undefined 和 null 是所有类型的子类型
let u: undefined = undefined
let n: null = null
let num: number = undefined

// any 类型  表示任意类型
let notSure: any = 4
notSure = 'string'
notSure = false
notSure.myName = 1
notSure.getName = function () {}

// 联合类型 
let numberOrString: number | string = 123
numberOrString = 'abc'

// 数组
let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.push(5)
// error  arrOfNumbers.push('str')

function test() {
  // 类数组 arguments
  console.log(arguments)
}
// 元组 Tuple
// 不能多也不能少，对应2项
let user: [string, number] = ['babab', 2]

