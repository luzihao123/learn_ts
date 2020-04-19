// 泛型  使得输入输出类型统一
function echo<T>(arg: T): T {
  return arg
}
const str: string = 'str'
const result = echo(str)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['str', 123])

// 约定泛型为array
function echoWithArr<T>(arg: T[]): T[]{
  console.log(arg.length)
  return arg
}

// 约束泛型 泛型中传入extends
interface IWithLength {
  length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T{
  console.log(arg.length)
  return arg
}
const string = echoWithLength('str')
const obj = echoWithLength({length: 10, width: 10})
const arr2 = echoWithLength([1,2,3])


// 实现推入队列类型和推出队列类型一致
class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T{
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

interface KeyPair<T, U> {
  key: T,
  value: U
}
let kp1: KeyPair<number, string> = {key: 1, value: 'str'}
let kp2: KeyPair<string, number> = {key: 'str', value: 123}

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

interface IPlus<T> {
  (a: T, b: T) :T
}
function plus(a: number, b: number): number {
  return a+b
}
const a: IPlus<number> = plus
function connect(a: string, b: string): string {
  return a+b
}
const b: IPlus<string> = connect