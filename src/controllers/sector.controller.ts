import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Sector } from 'src/entities/sector.model';
import { SectorService } from 'src/services/sector.service';

@Controller('sector')
export class SectorController {
  constructor(private sectorService: SectorService) {}

  @Post()
  async createSector(@Body() data): Promise<Sector> {
    return await this.sectorService.create(data as Sector);
  }

  @Get(':id')
  async getSector(@Param() id: string) {
    return await this.sectorService.show(id);
  }
}
