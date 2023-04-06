import { Module } from '@nestjs/common';
import { AppController} from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { HomeModule } from 'src/Home/home.module';
import { AboutModule } from 'src/About/about.module';
import { ResumeModule } from 'src/Resume/resume.module';
import { PortfolioModule } from 'src/Portfolio/portfolio.module';
import { BlogModule } from 'src/Blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://ugyendora:sFFtk9aaj2zWmcLg@cluster0.mp3xsfx.mongodb.net/Profile_website?retryWrites=true&w=majority"),
    HomeModule,
    AboutModule,
    ResumeModule,
    PortfolioModule,
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
