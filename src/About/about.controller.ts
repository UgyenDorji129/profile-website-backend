import { Body, Controller, Get, Post } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller()
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post("createAbout")
  async createAbout(
    @Body("desc") desc: string,
    @Body("age") age: string,
    @Body("residence") residence: string,
    @Body("email") email: string,
    @Body("phone") phone: string,
  ) {
    const result = await this.aboutService.createAbout({desc, age, residence, email, phone});
    return {id: result}
  }

  @Get("getAbout")
  async getAbout(){
    const result = await this.aboutService.getAbout();
    return {data:result};
  }

  @Post("createFunfact")
  async createFunFact(
    @Body("icon") icon: string,
    @Body("title") title: string,
    @Body("count") count: string,
  ){
    
    const result = await this.aboutService.createFunFact({icon, title, count});
    return {id: result};
  }

  @Get("getFunfact")
  async getFunFact(){
    const result = await this.aboutService.getFunFact();
    return {data: result};
  }

  @Post("createSkill")
  async createSkill(
    @Body("icon") icon: string,
    @Body("title") title: string,
    @Body("desc") desc: string,
  ){
    
    const result = await this.aboutService.createSkill({icon, title, desc});
    return {id: result};
  }

  @Get("getSkill")
  async getSkill(){
    const result = await this.aboutService.getSkill();
    return {data: result};
  }

}
