import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from 'src/entities/activity.entity';
import { ActivityService } from 'src/services/activity.service';
import { ActivityController } from 'src/controllers/activity.controller';
import { ImageModule } from './image.module';

@Module({
  imports: [TypeOrmModule.forFeature([Activity]), ImageModule],
  providers: [ActivityService],
  controllers: [ActivityController],
})
export class ActivityModule {}
