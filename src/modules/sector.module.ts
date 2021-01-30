import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sector } from 'src/entities/sector.entity';
import { SectorService } from 'src/services/sector.service';
import { SectorController } from 'src/controllers/sector.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sector])],
  providers: [SectorService],
  controllers: [SectorController],
})
export class SectorModule {}
