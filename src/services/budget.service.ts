import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from 'src/entities/budget.model';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private budgetRepository: Repository<Budget>,
  ) {}

  async index(): Promise<Budget[]> {
    return await this.budgetRepository.find();
  }

  async getBudgetFiltered(filter: Partial<Budget>): Promise<Budget[]> {
    return await this.budgetRepository.find(filter);
  }

  async show(id: string): Promise<Budget> {
    return await this.budgetRepository.findOne(id, {
      relations: ['project'],
    });
  }

  async create(budget: Budget): Promise<Budget> {
    return await this.budgetRepository.save(budget);
  }

  async update(budgetData: Budget): Promise<Budget> {
    const budget = await this.budgetRepository.update(
      { id: budgetData.id },
      budgetData,
    );
    return budget.raw;
  }

  async delete(id: string): Promise<Budget> {
    const budget = await this.budgetRepository.delete({ id });
    return budget.raw;
  }
}
