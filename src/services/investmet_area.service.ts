import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentArea } from 'src/entities/investment_area.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvestmentAreaService {
  constructor(
    @InjectRepository(InvestmentArea)
    private investmentAreaRepository: Repository<InvestmentArea>,
  ) {}

  async index(): Promise<InvestmentArea[]> {
    return await this.investmentAreaRepository.find();
  }

  async show(id: string): Promise<InvestmentArea> {
    return await this.investmentAreaRepository.findOne(id);
  }

  async create(investmentArea: InvestmentArea): Promise<InvestmentArea> {
    return await this.investmentAreaRepository.save(investmentArea);
  }

  async update(investmentAreaDaata: InvestmentArea): Promise<InvestmentArea> {
    const role = await this.investmentAreaRepository.update(
      { id: investmentAreaDaata.id },
      investmentAreaDaata,
    );
    return role.raw;
  }

  async delete(id: string): Promise<InvestmentArea> {
    const investmentArea = await this.investmentAreaRepository.delete({ id });
    return investmentArea.raw;
  }
}
