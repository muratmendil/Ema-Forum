import { Controller, Post, Get, Body } from '@nestjs/common';
import { ForumService } from 'src/forum/services/forum/forum.service';
import { Model } from 'mongoose';
import { ForumModel } from 'src/forum/models/forum/forum.model';
import { InjectModel } from '@nestjs/mongoose';

@Controller('forum')
export class ForumController {
    constructor(private forumService: ForumService) { }

    @Post('newPost')
    async newPost(@Body() forumModel: ForumModel) {
        return this.forumService.create(forumModel);
        // return "iuuyuyuy";
    }

    @Get('getAllPost')
    async getAllPost() {
        return this.forumService.getAllPost();
    }

}
