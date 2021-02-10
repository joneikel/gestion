import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BudgetSource } from 'src/entities/budgetSource.model';
import { BudgetSourceService } from 'src/services/budget_source.service';

@Controller('budgetSource')
export class BudgetSourceController {
  constructor(private budgetSourceService: BudgetSourceService) {}

  @Post()
  async createBudgetSource(@Body() data: BudgetSource): Promise<BudgetSource> {
    return await this.budgetSourceService.create(data);
  }

  @Get()
  async getBudgetSources(): Promise<BudgetSource[]> {
    return await this.budgetSourceService.index();
  }

  @Get(':id')
  async getBudgetSource(@Param() id: string) {
    return await this.budgetSourceService.show(id);
  }
}
