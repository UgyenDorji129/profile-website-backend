import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogDto } from './Dto/blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel("Blog") private readonly blogModel: Model<BlogDto>
  ){}

  async createBlog({imageUrl, blogUrl, title}){
    const newBlog = new this.blogModel({imageUrl, blogUrl, title});
    const result = await newBlog.save();

    return result.id;
  }

  async getBlog(){
    const result = await this.blogModel.find();
    return result;
  }
}
