import { Body, Controller, Post } from '@nestjs/common';
import { Measurement } from 'src/entities/measurement.entity';
import { MeasurementService } from 'src/services/measurement.service';

@Controller('measurement')
export class MeasurementController {
  constructor(private measurementService: MeasurementService) {}

  @Post()
  async createMeasurement(@Body() data): Promise<Measurement> {
    return await this.measurementService.create(data as Measurement);
  }
}
