import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AboutDto } from './Dto/about.dto';
import { SkillDto } from './Dto/skill.dto';
import { FunFactDto } from './Dto/funFact.dto';

@Injectable()
export class AboutService {

  constructor(
    @InjectModel("About") private readonly aboutModel: Model<AboutDto>,
    @InjectModel("Skill") private readonly skillModel: Model<SkillDto>,
    @InjectModel("Funfact") private readonly funFactModel: Model<FunFactDto>
  ){}

  async createAbout({desc, age, residence,email, phone}){
    const newAbout = new this.aboutModel({desc, age, residence, email, phone});
    const result = await newAbout.save();
    return result.id;
  }

  async getAbout(){
    const about = await this.aboutModel.find();
    return about;
  }

  async createFunFact({icon, title, count}){
    const newFunfact = new this.funFactModel({icon, title, count});
    const result = await newFunfact.save();
    return result.id;
  }

  async getFunFact(){
    const funFact = await this.funFactModel.find();
    return funFact;
  }

  async createSkill({icon, title, desc}){
    const newSkill = new this.skillModel({icon, title, desc});
    const result = await newSkill.save();
    return result.id;
  }

  async getSkill(){
    const result = await this.skillModel.find();
    return result;
  }
}
