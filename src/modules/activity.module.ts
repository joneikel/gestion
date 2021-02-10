import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Activity } from 'src/entities/activity.model';
import { ActivityService } from 'src/services/activity.service';
import { ActivityController } from 'src/controllers/activity.controller';
import { ImageModule } from './image.module';

@Module({
  imports: [SequelizeModule.forFeature([Activity]), ImageModule],
  providers: [ActivityService],
  controllers: [ActivityController],
})
export class ActivityModule {}
