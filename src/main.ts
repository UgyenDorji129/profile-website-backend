import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';

async function bootstrap() {
  const cors=require("cors");
  const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
  }


  const app = await NestFactory.create(AppModule);
  app.use(cors(corsOptions)) 
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
