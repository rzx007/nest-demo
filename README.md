<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Reflect Metadata](https://jkchao.github.io/typescript-book-chinese/tips/metadata.html)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 快捷创建 CURD

```bash
nest g resource users
```

## 查看分析文档

`Compodoc`

```
npx compodoc -p tsconfig.json -s
```

![nest](./statics/nest.png)

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)
- QuicklyStart - [学完这篇 Nest.js 实战，还没入门的来锤我](https://juejin.cn/post/7032079740982788132)
- 参考资料 -[一例看懂中间件、守卫、管道、异常过滤器、拦截器](https://blog.csdn.net/lxy869718069/article/details/103960790)

## TypeORM + MySQL

#### 安装 mysql

略

#### 依赖安装

使用 TypeORM 和 mysql 需要在项目中安装以下包

```bash
npm install --save @nestjs/typeorm typeorm mysql2
```

#### 引用配置

首先我们在 app.module 中引用 TypeOrmModule，TypeOrmModule 由 @nestjs/typeorm 提供

**synchronize: true 不要再开发环境开启**

```ts
// src/app.modules.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm'
@Module({
  imports: [
    // 使用 TypeORM 配置数据库
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '888888',
      database: 'test',
      entities: ["dist/modules/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

#### 创建实体 Entity

Entity 是由 @Entity 装饰器装饰的模型。 TypeORM 会为此类模型创建数据库表。

新建文件 `src/modules/article/entity/article.entity.ts`

```javascript
// src/modules/article/entity/article.entity.ts

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Article {
  // 主键id
  @PrimaryGeneratedColumn()
  id: number;

  // 创建时间
  @CreateDateColumn()
  createTime: Date;

  // 更新时间
  @UpdateDateColumn()
  updateTime: Date;

  // 软删除
  @Column({
    default: false,
  })
  isDelete: boolean;

  // 更新次数
  @VersionColumn()
  version: number;

  // 文章标题
  @Column('text')
  title: string;

  // 文章描述
  @Column('text')
  description: string;

  // 文章内容
  @Column('text')
  content: string;
}
```

#### 使用 DTO

关于 DTO，NestJS 是这么说的

> DTO（数据传输对象）模式。DTO 是一个对象，它定义了如何通过网络发送数据。我们可以通过使用 TypeScript 接口（Interface）或简单的类（Class）来定义 DTO 模式。有趣的是，我们在这里推荐使用类。为什么？类是 JavaScript ES6 标准的一部分，因此它们在编译后的 JavaScript 中被保留为实际实体。另一方面，由于 TypeScript 接口在转换过程中被删除，所以 Nest 不能在运行时引用它们。这一点很重要，因为诸如管道（Pipe）之类的特性为在运行时访问变量的元类型提供更多的可能性。

在 java 里面

> DTO: 数据传输对象,原先是为分布式提供粗粒度的数据实体,减少调用次数来提升性能和降低网络压力。

简单来说，就是定义一个数据，作用类似于定义方法的入参，而且还能方便我们做其他事情。比如我们的表单验证就可以在 DTO 中使用。

创建以下文件

```js
// src/modules/article/dto/list.dto.ts

export class ListDTO {
  readonly page: number;
  readonly pageSize: number;
}
```

```js
// src/modules/article/dto/id.dto.ts

export class IdDTO {
  readonly id: number
}
```

```js
// src/modules/article/dto/article-create.dto.ts

export class ArticleCreateDTO {
  readonly title: string;
  readonly description: string;
  readonly content: string;
}
```

```js
// src/modules/article/dto/article-edit.dto.ts

export class ArticleEditDTO {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly content: string;
}
```

```js
import {
  Controller,
  Body,
  Query,
  Get,
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { IdDTO } from './dto/id.dto';
import { ListDTO } from './dto/list.dto';

@Controller('article')
export class ArticleController {
  constructor(
    private articleService: ArticleService
  ) {}

  @Get('list')
  getMore(
    @Query() listDTO: ListDTO,
  ) {
    return this.articleService.getMore(listDTO)
  }

  @Get('info')
  getOne(
    @Query() idDto: IdDTO
  ) {
    return this.articleService.getOne(idDto)
  }

  @Post('create')
  create(
    @Body() articleCreateDTO: ArticleCreateDTO
  ) {
    return this.articleService.create(articleCreateDTO)
  }

  @Post('edit')
  update(
    @Body() articleEditDTO: ArticleEditDTO
  ) {
    return this.articleService.update(articleEditDTO)
  }

  @Post('delete')
  delete(
    @Body() idDto: IdDTO,
  ) {
    return this.articleService.delete(idDto)
  }
}

```

在 article.module 中定义使用那些存储库

```js
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article } from './entity/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
```

同时修改下我们的服务，改为使用 TypeORM 存取数据

```js
import { Injectable } from '@nestjs/common';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { IdDTO } from './dto/id.dto';
import { ListDTO } from './dto/list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entity/article.entity';

@Injectable()
export class ArticleService {
  list: any[];

  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {
    this.list = []
  }

  async getMore(
    listDTO: ListDTO,
  ) {
    const { page = 1, pageSize = 10 } = listDTO
    const getList = this.articleRepository
      .createQueryBuilder('article')
      .where({ isDelete: false })
      .select([
        'article.id',
        'article.title',
        'article.description',
        'article.createTime',
        'article.updateTime',
      ])
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getMany()

    const list = await getList
    return list
  }

  async getOne(
    idDto: IdDTO
  ) {
    const { id } = idDto
    const articleDetial = await this.articleRepository
      .createQueryBuilder('article')
      .where('article.id = :id', { id })
      .getOne()
    return articleDetial;
  }

  async create(
    articleCreateDTO: ArticleCreateDTO
  ):Promise<Article>{
    const article = new Article();
    article.title = articleCreateDTO.title
    article.description = articleCreateDTO.description
    article.content = articleCreateDTO.content
    const result = await this.articleRepository.save(article);
    return result
  }

  async update(
    articleEditDTO: ArticleEditDTO
  ): Promise<Article>{
    const { id } = articleEditDTO
    let articleToUpdate = await this.articleRepository.findOne({ id })
    articleToUpdate.title = articleEditDTO.title
    articleToUpdate.description = articleEditDTO.description
    articleToUpdate.content = articleEditDTO.content
    const result = await this.articleRepository.save(articleToUpdate)
    return result
  }

  async delete (
    idDTO: IdDTO,
  ) {
    const { id } = idDTO
    let articleToUpdate = await this.articleRepository.findOne({ id })
    articleToUpdate.isDelete = true
    const result = await this.articleRepository.save(articleToUpdate)
    return result
  }
}
```
