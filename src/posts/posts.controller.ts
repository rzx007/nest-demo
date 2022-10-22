import { Controller, Get, Ip, Query, Req, UseGuards } from '@nestjs/common'
import { RolesGuard } from 'src/core/guard/roles.guard'
import { PostsService } from './posts.service'
import { Request } from 'express'

// @UseGuards(RolesGuard)
@Controller('posts')
export class PostsController {
  private readonly postService: PostsService
  constructor(postService: PostsService) {
    this.postService = postService
  }
  @Get('query')
  getPost(@Query() queries, @Req() request: Request, @Ip() ip: string) {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    console.log(request.cookies)
    console.log(ip)
    return queries.name
  }
}
