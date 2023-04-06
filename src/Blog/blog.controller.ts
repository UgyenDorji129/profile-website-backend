import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller()
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post("createBlog")
  async createBlog(
    @Body("imageUrl") imageUrl: string,
    @Body("blogUrl") blogUrl: string,
    @Body("title") title: string
  ){
    const result = await this.blogService.createBlog({imageUrl,blogUrl,title});
    return {id:result};
  }

  @Get("getBlog")
  async getBlog(){
    const result = await this.blogService.getBlog();
    return {data: result};
  }
  
}
