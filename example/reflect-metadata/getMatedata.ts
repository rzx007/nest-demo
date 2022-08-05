import { isConstructor, isFunction } from './utils';
import { METHOD_METADATA, PATH_METADATA } from './constants';

export function mapRoute(instance: object) {
  const prototype = Object.getPrototypeOf(instance);

  // 筛选出类的 methodName
  const methodsNames = Object.getOwnPropertyNames(prototype).filter(
    (item) => !isConstructor(item) && isFunction(prototype[item]),
  );
  return methodsNames.map((methodName) => {
    const fn = prototype[methodName];

    // 取出定义的 metadata
    const route = Reflect.getMetadata(PATH_METADATA, fn);
    const method = Reflect.getMetadata(METHOD_METADATA, fn);
    return {
      route,
      method,
      fn,
      methodName,
    };
  });
}
