import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Measurement } from 'src/entities/measurement.entity';
import { Role } from 'src/entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MeasurementService {
  constructor(
    @InjectRepository(Measurement)
    private measurementRepository: Repository<Measurement>,
  ) {}

  async index(): Promise<Measurement[]> {
    return await this.measurementRepository.find();
  }

  async show(id: string): Promise<Measurement> {
    return await this.measurementRepository.findOne(id);
  }

  async create(measurement: Measurement): Promise<Measurement> {
    return await this.measurementRepository.save(measurement);
  }

  async update(measurementData: Measurement): Promise<Measurement> {
    const measurement = await this.measurementRepository.update(
      { id: measurementData.id },
      measurementData,
    );
    return measurement.raw;
  }

  async delete(id: string): Promise<Role> {
    const role = await this.measurementRepository.delete({ id });
    return role.raw;
  }
}
