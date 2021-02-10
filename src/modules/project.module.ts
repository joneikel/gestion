import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Project } from 'src/entities/project.model';
import { ProjectService } from 'src/services/project.service';
import { ProjectController } from 'src/controllers/project.controller';
import { BudgetModule } from './budget.module';
import { BudgetService } from 'src/services/budget.service';
import { ProgramModule } from './programModule';

@Module({
  imports: [SequelizeModule.forFeature([Project]), BudgetModule, ProgramModule],
  providers: [ProjectService, BudgetService],
  controllers: [ProjectController],
})
export class ProjectModule {}
