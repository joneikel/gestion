import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { InvestmentArea } from 'src/entities/investment_area.entity';
import { InvestmentAreaService } from 'src/services/investmet_area.service';

@Controller('investmentArea')
export class InvestmentAreaController {
  constructor(private investmentAreaService: InvestmentAreaService) {}

  @Post()
  async createInvestmentArea(@Body() data): Promise<InvestmentArea> {
    return await this.investmentAreaService.create(data as InvestmentArea);
  }

  @Get()
  async getInvestmentAreas(): Promise<InvestmentArea[]> {
    return await this.investmentAreaService.index();
  }

  @Get(':id')
  async getInvestmentArea(@Param() id: string) {
    return await this.investmentAreaService.show(id);
  }

  @Delete(':id')
  async deleteInvestmentArea(@Param() id: string) {
    return await this.investmentAreaService.delete(id);
  }
}
