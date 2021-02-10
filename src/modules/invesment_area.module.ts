import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { InvestmentArea } from 'src/entities/investmentArea.model';
import { InvestmentAreaService } from 'src/services/investmet_area.service';
import { InvestmentAreaController } from 'src/controllers/investment_area.controller';

@Module({
  imports: [SequelizeModule.forFeature([InvestmentArea])],
  providers: [InvestmentAreaService],
  controllers: [InvestmentAreaController],
})
export class InvestmentAreaModule { }
