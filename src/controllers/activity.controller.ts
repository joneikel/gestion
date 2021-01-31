import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Activity } from 'src/entities/activity.entity';
import { ActivityService } from 'src/services/activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Post()
  async createActivity(@Body() data): Promise<Activity> {
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
