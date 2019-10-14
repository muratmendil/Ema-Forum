import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ForumConfig } from 'src/configs/forum/forum.config';
import { ForumModel } from 'src/forum/models/forum/forum.model';
import { IForumModel } from 'src/forum/models/forum/forum.i';

@Injectable()
export class ForumService {
    constructor(@InjectModel('Forum') private readonly forumModel: Model<ForumModel>) { }

    forumConfig: ForumConfig = new ForumConfig();
    url = this.forumConfig.url;

    async getAllPost(): Promise<IForumModel[]> {
        return await this.forumModel.find().exec();
    }

    async create(forumModel: ForumModel): Promise<IForumModel> {
        const createdNote = new this.forumModel(forumModel);
        return await createdNote.save();
    }
}
