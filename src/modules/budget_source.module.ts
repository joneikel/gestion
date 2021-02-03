import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetSource } from 'src/entities/budget_source.entity';
import { BudgetSourceService } from 'src/services/budget_source.service';
import { BudgetSourceController } from 'src/controllers/budget_source.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetSource])],
  providers: [BudgetSourceService],
  controllers: [BudgetSourceController],
})
export class BudgetSourceModule {}
