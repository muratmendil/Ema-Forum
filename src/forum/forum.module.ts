import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ForumSchema } from './models/forum/forum.schema';
import { ForumController } from './controllers/forum/forum.controller';
import { ForumService } from './services/forum/forum.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Forum', schema: ForumSchema }]), ForumModule
    ],
    controllers: [ForumController],
    providers: [ForumService],
    exports: [ForumService]
})
export class ForumModule { }
