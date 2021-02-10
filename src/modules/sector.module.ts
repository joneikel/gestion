import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sector } from 'src/entities/sector.model';
import { SectorService } from 'src/services/sector.service';
import { SectorController } from 'src/controllers/sector.controller';

@Module({
  imports: [SequelizeModule.forFeature([Sector])],
  providers: [SectorService],
  controllers: [SectorController],
})
export class SectorModule {}
