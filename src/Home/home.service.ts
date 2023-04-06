import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HomeDto } from './Dto/home.dto';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel("Home") private readonly homeModel: Model<HomeDto>,
  ){}
  
  async createUser({name,role}) {
    const newUser = new this.homeModel({name, role});
    const result = await newUser.save()
    return result.id;
  }

  async getUser(){
    const user = await this.homeModel.findOne();
    return user;
  }
}
