

// 加上const后变成常量枚举，不会把枚举编译成代码
const enum Direction {
  Up = 'UP',
  Down  = 'DOWN',
  Left  = 'LEFT',
  Right  = 'RIGHT',
}
const value = 'UP'
if (value === Direction.Up) {
  console.log('GO UP')
}