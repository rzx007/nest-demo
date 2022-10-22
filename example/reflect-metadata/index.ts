import { PATH_METADATA } from './constants';
import { Controller, Get, Post } from './defineMetadata';
import { mapRoute } from './getMatedata';

@Controller('/test')
class SomeClass {
  @Get('/a')
  someGetMethod() {
    return 'hello world';
  }

  @Post('/b')
  somePostMethod() {
    return 'hello worldb';
  }
}

Reflect.getMetadata(PATH_METADATA, SomeClass); // '/test'

mapRoute(new SomeClass());
