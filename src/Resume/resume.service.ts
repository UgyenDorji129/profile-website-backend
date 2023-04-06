import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CertificateDto } from './Dto/certificate.dto';
import { EducationDto } from './Dto/education.dto';
import { FrameworkDto } from './Dto/framework.dto';
import { OtherSkillDto } from './Dto/otherSkill.dto';
import { ProgramingLangDto } from './Dto/programingLang.dto';

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel("Certificate") private readonly certificateModel: Model<CertificateDto>,
    @InjectModel("Education") private readonly educationModel: Model<EducationDto>,
    @InjectModel("Framework") private readonly frameworkModel: Model<FrameworkDto>,
    @InjectModel("OtherSkill") private readonly otherSkillModel: Model<OtherSkillDto>,
    @InjectModel("ProgramingLang") private readonly programingLangModel: Model<ProgramingLangDto>
  ){}

  async createCertificate({imageUrl, title, desc}){
    const newCerti = new this.certificateModel({imageUrl, title, desc});
    const result = await newCerti.save();

    return result.id;
  }

  async getCertificate(){
    const result = await this.certificateModel.find();
    return result;
  }

  async createEducation({year, title, desc}){
    const newEdu = new this.educationModel({year, title, desc});
    const result = await newEdu.save();

    return result.id;
  }

  async getEducation(){
    const result = await this.educationModel.find();
    return result;
  }

  async createFramework({language, percentage}){
    const newFrame = new this.frameworkModel({language, percentage});
    const result = await newFrame.save();

    return result.id;
  }

  async getFramework(){
    const result = await this.frameworkModel.find();
    return result;
  }

  async createOtherSkill({title}){
    const newSkill = new this.otherSkillModel({title});
    const result = await newSkill.save();

    return result.id;
  }

  async getOtherSkill(){
    const result = await this.otherSkillModel.find();
    return result;
  }

  async createPrograming({language, percentage}){
    const newLang = new this.programingLangModel({language, percentage});
    const result = await newLang.save();

    return result.id;
  }

  async getPrograming(){
    const result = await this.programingLangModel.find();
    return result;
  }

}
