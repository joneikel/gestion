import { Body, Controller, Post } from '@nestjs/common';
import { InvestmentArea } from 'src/entities/investment_area.entity';
import { InvestmentAreaService } from 'src/services/investmet_area.service';

@Controller('investmentArea')
export class InvestmentAreaController {
  constructor(private investmentAreaService: InvestmentAreaService) {}

  @Post()
  async createInvestmentArea(@Body() data): Promise<InvestmentArea> {
    return await this.investmentAreaService.create(data as InvestmentArea);
  }
}
