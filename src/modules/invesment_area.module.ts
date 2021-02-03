import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentArea } from 'src/entities/investment_area.entity';
import { InvestmentAreaService } from 'src/services/investmet_area.service';
import { InvestmentAreaController } from 'src/controllers/investment_area.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InvestmentArea])],
  providers: [InvestmentAreaService],
  controllers: [InvestmentAreaController],
})
export class InvestmentAreaModule { }
