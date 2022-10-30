import { INJECTABLE_METADATA_KEY, PATH_METADATA } from './constants'
import { Controller, Get, Post } from './defineMetadata'
import { mapRoute } from './getMatedata'
type Constructor<T = any> = new (...args: any[]) => T

const Injectable = (): ClassDecorator => (target) => {
  Reflect.defineMetadata(INJECTABLE_METADATA_KEY, true, target)
  return target
}
@Injectable()
class UsersService {
  getUser() {
    return {
      name: 'zth',
      age: 12,
    }
  }
}
@Controller('/test')
class SomeClass {
  a: number
  constructor(private readonly usersService: UsersService, a: number) {
    this.a = a
  }
  @Get('/a')
  someGetMethod() {
    return this.usersService.getUser()
  }

  @Post('/b')
  somePostMethod() {
    return this.a + 'hello worldb'
  }
}

const Factory = <T>(target: Constructor<T>): T => {
  Reflect.getMetadata(PATH_METADATA, target) // '/test'
  // 获取所有注入的服务
  console.log(Reflect.getMetadata('design:paramtypes', target))
  const providers = Reflect.getMetadata('design:paramtypes', target) // [userServive]
  const args = providers?.map((provider: Constructor) => new provider())
  return new target(...args)
}
const IoC = Factory(SomeClass)

const maps = mapRoute(IoC)

console.log(maps)

console.log(IoC.someGetMethod())
