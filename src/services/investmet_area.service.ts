import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { InvestmentArea } from 'src/entities/investmentArea.model';


@Injectable()
export class InvestmentAreaService {
  constructor(
    @InjectModel(InvestmentArea)
    private investmentAreaRepository: Repository<InvestmentArea>,
  ) { }

  async index(): Promise<InvestmentArea[]> {
    return await this.investmentAreaRepository.findAll();
  }

  async show(id: string): Promise<InvestmentArea> {
    return await this.investmentAreaRepository.findOne({ where: { id } });
  }

  async create(investmentArea: InvestmentArea): Promise<InvestmentArea> {
    return await this.investmentAreaRepository.create({ where: { investmentArea } });
  }

  async delete(id: string): Promise<InvestmentArea> {
    try {
      const investmentArea = await this.investmentAreaRepository.findOne({ where: { id } });
      await investmentArea.destroy()
      return investmentArea;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }

  }
}
