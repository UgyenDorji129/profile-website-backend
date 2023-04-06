import { Body, Controller, Get, Post } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Post("createHome")
  async createUser(
    @Body("name") name: string,
    @Body("role") role: string
  ){
    return await this.homeService.createUser({name,role});
  }

  @Get("getHome")
  async getUser(){
    const result = await this.homeService.getUser();
    return {data:result};
  }
}
