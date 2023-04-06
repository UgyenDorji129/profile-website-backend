import { Module } from '@nestjs/common';
import { ResumeController} from './resume.controller';
import { ResumeService } from './resume.service';
import {MongooseModule} from '@nestjs/mongoose';
import { CertificateSchema } from './Model/certificate.model';
import { EducationSchema } from './Model/education.model';
import { FrameworkSchema } from './Model/framework.model';
import { OtherSkillSchema } from './Model/otherSkill.model';
import { ProgramingLangSchema } from './Model/programingLang.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:"Certificate", schema: CertificateSchema}, 
      {name:"Education", schema:EducationSchema},
      {name:"Framework", schema:FrameworkSchema},
      {name:"OtherSkill", schema:OtherSkillSchema},
      {name:"ProgramingLang", schema:ProgramingLangSchema}
    ])

  ],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
