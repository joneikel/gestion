import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BudgetSource } from 'src/entities/budgetSource.model';
import { BudgetSourceService } from 'src/services/budget_source.service';
import { BudgetSourceController } from 'src/controllers/budget_source.controller';

@Module({
  imports: [SequelizeModule.forFeature([BudgetSource])],
  providers: [BudgetSourceService],
  controllers: [BudgetSourceController],
})
export class BudgetSourceModule {}
