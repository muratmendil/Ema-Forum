import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForumModule } from './forum/forum.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ForumConfig } from './configs/forum/forum.config';

@Module({
  imports: [
    MongooseModule.forRoot(new ForumConfig().url),
    ForumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
