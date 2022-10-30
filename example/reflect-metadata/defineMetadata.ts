import { METHOD_METADATA, PATH_METADATA } from './constants'
import 'reflect-metadata'
export const Controller = (path: string): ClassDecorator => {
  return (target: any) => {
    Reflect.defineMetadata(PATH_METADATA, path, target)
  }
}

const createMappingDecorator =
  (method: string) =>
  (path: string): MethodDecorator => {
    return (target, key, descriptor) => {
      Reflect.defineMetadata(PATH_METADATA, path, target, key)
      Reflect.defineMetadata(METHOD_METADATA, method, target, key)
    }
  }

export const Get = createMappingDecorator('GET')
export const Post = createMappingDecorator('POST')
