import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Budget } from 'src/entities/budget.model';


@Injectable()
export class BudgetService {
  constructor(
    @InjectModel(Budget)
    private budgetRepository: Repository<Budget>,
  ) { }

  async index(): Promise<Budget[]> {
    return await this.budgetRepository.findAll();
  }

  async show(id: string): Promise<Budget> {
    return await this.budgetRepository.findOne({ where: { id } });
  }

  async create(budget: Budget): Promise<Budget> {
    return await this.budgetRepository.create({ where: { budget } });
  }



  async delete(id: string): Promise<Budget> {
    try {
      const budget = await this.budgetRepository.findOne({ where: { id } });
      await budget.destroy();
      return budget;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
  }
}
