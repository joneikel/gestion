import { Body, Controller, Post } from '@nestjs/common';
import { Institution } from 'src/entities/institution.entity';
import { InstitutionService } from 'src/services/institution.service';

@Controller('institution')
export class InstitutionController {
  constructor(private institutionService: InstitutionService) {}

  @Post()
  async createInstitution(@Body() data): Promise<Institution> {
    return await this.institutionService.create(data as Institution);
  }
}
