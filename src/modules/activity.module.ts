import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from 'src/entities/activity.entity';
import { ActivityService } from 'src/services/activity.service';
import { ActivityController } from 'src/controllers/activity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Activity])],
  providers: [ActivityService],
  controllers: [ActivityController],
})
export class ActivityModule {}
