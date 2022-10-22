// 判断isConstructor
// export function isConstructor(obj: any) {
//   return obj.prototype && obj.prototype.isPrototypeOf(obj);
// }
export function isConstructor(arg: any) {
  return arg === 'constructor';
}
// 判断isFunction
export function isFunction(arg: any) {
  return typeof arg === 'function';
}
