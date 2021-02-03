import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Activity } from 'src/entities/activity.entity';
import { ActivityService } from 'src/services/activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 5, {
      dest: './uploads',
    }),
  )
  async createActivity(
    @Body() data,
    @UploadedFiles() files: FileUpload[],
  ): Promise<Activity> {
    const filePaths = files.map((file) => file.path);
    console.log(filePaths);
    return await this.activityService.create(data as Activity);
  }

  @Get()
  async getActivities(): Promise<Activity[]> {
    return await this.activityService.index();
  }
  @Get(':id')
  async getActivity(@Param() id: string) {
    return await this.activityService.show(id);
  }
}

interface FileUpload {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}
