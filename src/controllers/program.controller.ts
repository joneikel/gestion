import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Program } from 'src/entities/program.model';
import { ProgramService } from 'src/services/program.service';

@Controller('program')
export class ProgramController {
  constructor(private programService: ProgramService) {}

  @Post()
  async createProgram(@Body() data): Promise<Program> {
    return await this.programService.create(data as Program);
  }

  @Get()
  async getProgram(): Promise<Program[]> {
    return await this.programService.index();
  }

  @Get('filter')
  async getProgramsFiltered(@Query() query: Partial<Program>) {
    return await this.programService.getProgramsFiltered(query);
  }
}
