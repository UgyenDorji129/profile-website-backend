import { Module } from '@nestjs/common';
import { PortfolioController} from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import {MongooseModule} from '@nestjs/mongoose';
import { PortfolioSchema } from './Model/portfolio.model';

@Module({
  imports: [
    MongooseModule.forFeature([{name:"Portfolio", schema:PortfolioSchema}]),

  ],
  controllers: [PortfolioController],
  providers: [PortfolioService],
})
export class PortfolioModule {}
