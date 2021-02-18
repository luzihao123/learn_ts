// function add(x: number, y: number, z?: number, d: number = 10): number {
//   if (typeof z === 'number') {
//     return x + y + z + d
//   } else {
//     return x + y + d
//   }
// }

// 参数不能类型错误 不能多也不不能少
// 可选参数用? 可选参数只能放在最后面   带默认值直接变成可选


const add = function add(x: number, y: number, z?: number, d: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z + d
  } else {
    return x + y + d
  }
}
let res = add(2,3)

// 函数类型
let add2: (x: number, y: number, z?: number) => number = add

// ts 具有类型推论功能，在没有明确指定类型时候会进行推论类型