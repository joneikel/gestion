import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Measurement } from 'src/entities/measurement.model';
import { Role } from 'src/entities/role.model';


@Injectable()
export class MeasurementService {
  constructor(
    @InjectModel(Measurement)
    private measurementRepository: Repository<Measurement>,
  ) { }

  async index(): Promise<Measurement[]> {
    return await this.measurementRepository.findAll();
  }

  async show(id: string): Promise<Measurement> {
    return await this.measurementRepository.findOne({ where: { id } });
  }

  async create(measurement: Measurement): Promise<Measurement> {
    return await this.measurementRepository.create(measurement);
  }

  async delete(id: string): Promise<Measurement> {
    try {
      const measurement = await this.measurementRepository.findOne({ where: { id } });
      await measurement.destroy();
      return measurement;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
  }
}
