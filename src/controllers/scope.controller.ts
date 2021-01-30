import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Scope } from 'src/entities/scope.entity';
import { ScopeService } from 'src/services/scope.service';

@Controller('scope')
export class ScopeController {
  constructor(private scopeService: ScopeService) {}

  @Post()
  async createScope(@Body() data): Promise<Scope> {
    return await this.scopeService.create(data as Scope);
  }

  @Get(':id')
  async getScope(@Param() id: string) {
    return await this.scopeService.show(id);
  }
}
