import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResumeService } from './resume.service';

@Controller()
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post("createCertificate")
  async createCertificate(
    @Body("imageUrl") imageUrl: string,
    @Body("title") title: string,
    @Body("desc") desc: string
  ){
    const result = await this.resumeService.createCertificate({imageUrl, title, desc});
    return {id:result};
  }

  @Get("getCertificate")
  async getCertificate(){
    const result =  await this.resumeService.getCertificate();

    return {data: result};
  }

  @Post("createEducation")
  async createEducation(
    @Body("year") year: string,
    @Body("title") title: string,
    @Body("desc") desc: string
  ){
    const result = await this.resumeService.createEducation({year,title,desc});
    return {id: result};
  }

  @Get("getEducation")
  async getEducation(){
    const result = await this.resumeService.getEducation();
    return {data: result};
  }

  @Post("createFrame")
  async createFramework(
    @Body("language") language: string,
    @Body("percentage") percentage: string
  ){
    const result = await this.resumeService.createFramework({language, percentage});
    return {id: result};
  }

  @Get("getFrame")
  async getFrameWork(){
    const result = await this.resumeService.getFramework();
    return {data: result};
  }

  @Post("createOtherSkill")
  async createOtherSkill(
    @Body("title") title: string
  ){
    const result = await this.resumeService.createOtherSkill({title});
    return {id: result};
  }

  @Get("getOtherSkill")
  async getOtherSkill(){
    const result = await this.resumeService.getOtherSkill();

    return{data: result};
  }

  @Post("createPrograming")
  async createProgramingLang(
    @Body("language") language: string,
    @Body("percentage") percentage: string
  ){
    const result = await this.resumeService.createPrograming({language, percentage});
    return {id: result};
  }

  @Get("getPrograming")
  async getProgramingLang(){
    const result = await this.resumeService.getPrograming();
    return {data: result};
  }
}
