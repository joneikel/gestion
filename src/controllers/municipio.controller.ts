import { Body, Controller, Get, Post } from '@nestjs/common';
import { Municipio } from 'src/entities/municipio.entity';
import { MunicipioService } from 'src/services/municipio.service';

@Controller('municipio')
export class MunicipioController {
  constructor(private municipioService: MunicipioService) {}

  @Post()
  async createMunicipio(@Body() data): Promise<Municipio> {
    return await this.municipioService.create(data as Municipio);
  }

  @Get()
  async getMunicipios(): Promise<Municipio[]> {
    return await this.municipioService.index();
  }
}