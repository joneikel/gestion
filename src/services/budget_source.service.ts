import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetSource } from 'src/entities/budget_source.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetSourceService {
  constructor(
    @InjectRepository(BudgetSource)
    private budgetSourceRepository: Repository<BudgetSource>,
  ) {}

  async index(): Promise<BudgetSource[]> {
    return await this.budgetSourceRepository.find();
  }

  async show(id: string): Promise<BudgetSource> {
    return await this.budgetSourceRepository.findOne(id, {
      relations: ['budgets'],
    });
  }

  async create(budgetSource: BudgetSource): Promise<BudgetSource> {
    return await this.budgetSourceRepository.save(budgetSource);
  }

  async update(budgetSourceData: BudgetSource): Promise<BudgetSource> {
    const budgetSource = await this.budgetSourceRepository.update(
      { id: budgetSourceData.id },
      budgetSourceData,
    );
    return budgetSource.raw;
  }

  async delete(id: string): Promise<BudgetSource> {
    const budgetSource = await this.budgetSourceRepository.delete({ id });
    return budgetSource.raw;
  }
}
