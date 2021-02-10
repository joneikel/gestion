import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Parroquia } from 'src/entities/parroquia.model';
import { ParroquiaService } from 'src/services/parroquia.service';

@Controller('parroquia')
export class ParroquiaController {
  constructor(private parroquiaService: ParroquiaService) {}

  @Post()
  async createParroquia(@Body() data: Parroquia): Promise<Parroquia> {
    return await this.parroquiaService.create(data);
  }
  @Get('filter')
  async getParroquiaFiltered(@Query() query: Partial<Parroquia>) {
    return await this.parroquiaService.getParroquiaFiltered(query);
  }
  @Get()
  async getParroquia(): Promise<Parroquia[]> {
    return await this.parroquiaService.index();
  }
}
