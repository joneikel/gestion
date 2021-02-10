import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/entities/project.model';
import { ProjectService } from 'src/services/project.service';
import { ProjectController } from 'src/controllers/project.controller';
import { BudgetModule } from './budget.module';
import { BudgetService } from 'src/services/budget.service';
import { ProgramModule } from './programModule';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), BudgetModule, ProgramModule],
  providers: [ProjectService, BudgetService],
  controllers: [ProjectController],
})
export class ProjectModule {}
