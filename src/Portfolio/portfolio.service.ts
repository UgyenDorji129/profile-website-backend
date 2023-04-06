import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PortfolioDto } from './Dto/portfolio.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel("Portfolio") private readonly portfolioModel: Model<PortfolioDto>
  ){}

  async createPortfolio({imageUrl, projectUrl,title, desc}){
    const newPortfolio = new this.portfolioModel({imageUrl, projectUrl,title, desc});
    const result = await newPortfolio.save();

    return result.id;
  }

  async getPortfolio(){
    const result = await this.portfolioModel.find();
    return result;
  }
}
