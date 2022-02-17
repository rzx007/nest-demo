import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  private readonly postService: PostsService;
  constructor(postService: PostsService) {
    this.postService = postService;
  }
  @Get('query')
  getPost(): string {
    return 'hello post';
  }
}
