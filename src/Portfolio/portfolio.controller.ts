import { Body, Controller, Get, Post } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller()
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post("createPortfolio")
  async createPortfolio(
    @Body("imageUrl") imageUrl: string,
    @Body("projectUrl") projectUrl: string,
    @Body("title") title: string,
    @Body("desc") desc: string
  ){
    const result = await this.portfolioService.createPortfolio({imageUrl,projectUrl,title,desc});
    return {id:result};
  }

  @Get("getPortfolio")
  async getPortfolio(){
    const result = await this.portfolioService.getPortfolio();
    return {data: result};
  }
  
}
