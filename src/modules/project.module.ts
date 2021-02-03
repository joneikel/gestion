import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/entities/project.entity';
import { ProjectService } from 'src/services/project.service';
import { ProjectController } from 'src/controllers/project.controller';
import { BudgetModule } from './budget.module';
import { BudgetService } from 'src/services/budget.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), BudgetModule],
  providers: [ProjectService, BudgetService],
  controllers: [ProjectController],
})
export class ProjectModule {}
