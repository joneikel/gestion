import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Budget } from 'src/entities/budget.model';
import { BudgetService } from 'src/services/budget.service';

@Controller('budget')
export class BudgetController {
  constructor(private budgetService: BudgetService) {}

  @Post()
  async createBudget(@Body() data): Promise<Budget> {
    return await this.budgetService.create(data as Budget);
  }

  @Get()
  async getBudgets(): Promise<Budget[]> {
    return await this.budgetService.index();
  }
  @Get(':id')
  async getBudget(@Param() id: string) {
    return await this.budgetService.show(id);
  }
}
