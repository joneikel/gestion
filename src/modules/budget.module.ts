import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Budget } from 'src/entities/budget.model';
import { BudgetService } from 'src/services/budget.service';
import { BudgetController } from 'src/controllers/budget.controller';

@Module({
  imports: [SequelizeModule.forFeature([Budget])],
  providers: [BudgetService],
  controllers: [BudgetController],
  exports:[BudgetService, SequelizeModule]
})
export class BudgetModule {}
