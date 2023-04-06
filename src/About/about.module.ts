import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import {MongooseModule} from '@nestjs/mongoose';
import { AboutSchema } from './Model/about.model';
import { SkillSchema } from './Model/skill.dto';
import { FunFactSchema } from './Model/funFact.model';

@Module({
  imports: [
    MongooseModule.forFeature([{name:"About", schema:AboutSchema},{name:"Skill", schema:SkillSchema}, {name:"Funfact", schema:FunFactSchema}]),
  ],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
