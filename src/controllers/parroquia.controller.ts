import { Body, Controller, Get, Post } from '@nestjs/common';
import { Parroquia } from 'src/entities/parroquia.entity';
import { ParroquiaService } from 'src/services/parroquia.service';

@Controller('parroquia')
export class ParroquiaController {
  constructor(private parroquiaService: ParroquiaService) {}

  @Post()
  async createParroquia(@Body() data: Parroquia): Promise<Parroquia> {
    return await this.parroquiaService.create(data);
  }

  @Get()
  async getParroquia(): Promise<Parroquia[]> {
    return await this.parroquiaService.index();
  }
}
