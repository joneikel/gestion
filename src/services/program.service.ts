import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Program } from 'src/entities/program.model';


@Injectable()
export class ProgramService {
  constructor(
    @InjectModel(Program)
    private programRepository: Repository<Program>,
  ) { }

  async index(): Promise<Program[]> {
    return await this.programRepository.findAll();
  }

  async show(id: string): Promise<Program> {
    return await this.programRepository.findOne({ where: { id } });
  }

  async create(program: Program): Promise<Program> {
    return await this.programRepository.create(program);
  }

  async delete(id: string): Promise<Program> {
    try {
      const program = await this.programRepository.findOne({ where: { id } });
      await program.destroy();
      return program;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
  }
}
