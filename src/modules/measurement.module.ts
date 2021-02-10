import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Measurement } from 'src/entities/measurement.model';
import { MeasurementService } from 'src/services/measurement.service';
import { MeasurementController } from 'src/controllers/measurement.controller';

@Module({
  imports: [SequelizeModule.forFeature([Measurement])],
  providers: [MeasurementService],
  controllers: [MeasurementController],
})
export class MeasurementModule {}
