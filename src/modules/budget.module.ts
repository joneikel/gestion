import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from 'src/entities/budget.model';
import { BudgetService } from 'src/services/budget.service';
import { BudgetController } from 'src/controllers/budget.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  providers: [BudgetService],
  controllers: [BudgetController],
  exports:[BudgetService, TypeOrmModule]
})
export class BudgetModule {}
