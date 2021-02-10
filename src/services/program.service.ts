import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Program } from 'src/entities/program.model';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private programRepository: Repository<Program>,
  ) {}

  async index(): Promise<Program[]> {
    return await this.programRepository.find({
      relations: ['institution'],
    });
  }

  async getProgramsFiltered(filter: Partial<Program>): Promise<Program[]> {
    return await this.programRepository.find(filter);
  }

  async show(id: string): Promise<Program> {
    return await this.programRepository.findOne(id, {
      relations: ['institution', 'projects'],
    });
  }

  async create(program: Program): Promise<Program> {
    return await this.programRepository.save(program);
  }

  async update(programData: Program): Promise<Program> {
    const program = await this.programRepository.update(
      { id: programData.id },
      programData,
    );
    return program.raw;
  }

  async delete(id: string): Promise<Program> {
    const program = await this.programRepository.delete({ id });
    return program.raw;
  }
}
