import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectStatus } from 'src/entities/projectStatus.model';
import { ProjectStatusService } from 'src/services/project_status.service';
import { ProjectStatusController } from 'src/controllers/project_status.controller';

@Module({
  imports: [SequelizeModule.forFeature([ProjectStatus])],
  providers: [ProjectStatusService],
  controllers: [ProjectStatusController],
})
export class ProjectStatusModule {}
