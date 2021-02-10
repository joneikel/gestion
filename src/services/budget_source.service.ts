import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BudgetSource } from 'src/entities/budgetSource.model';


@Injectable()
export class BudgetSourceService {
  constructor(
    @InjectModel(BudgetSource)
    private budgetSourceRepository: Repository<BudgetSource>,
  ) { }

  async index(): Promise<BudgetSource[]> {
    return await this.budgetSourceRepository.findAll();
  }

  async show(id: string): Promise<BudgetSource> {
    return await this.budgetSourceRepository.findOne({ where: { id } });
  }

  async create(budgetSource: BudgetSource): Promise<BudgetSource> {
    return await this.budgetSourceRepository.create(budgetSource);
  }

  async delete(id: string): Promise<BudgetSource> {
    try {
        const budgetSource = await this.budgetSourceRepository.findOne({ where: { id } });
        await  budgetSource.destroy();
        return budgetSource;  
    } catch (error) {
       throw new HttpException(error.toString(), 500);
    }
    
  }
}
