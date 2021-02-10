import { Body, Controller, Get, Post } from '@nestjs/common';
import { Mod } from 'src/entities/mod.model';
import { ModService } from 'src/services/mod.service';

@Controller('mod')
export class ModController {
  constructor(private modService: ModService) {}

  @Post()
  async createMod(@Body() data): Promise<Mod> {
    return await this.modService.create(data as Mod);
  }
  @Get()
  async getMods(): Promise<Mod[]> {
    return await this.modService.index();
  }
}
