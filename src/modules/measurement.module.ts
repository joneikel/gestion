import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Measurement } from 'src/entities/measurement.entity';
import { MeasurementService } from 'src/services/measurement.service';
import { MeasurementController } from 'src/controllers/measurement.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Measurement])],
  providers: [MeasurementService],
  controllers: [MeasurementController],
})
export class MeasurementModule {}
