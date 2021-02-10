import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Scope as Scope } from 'src/entities/scope.model';


@Injectable()
export class ScopeService {
  constructor(
    @InjectModel(Scope)
    private scopeRepository: Repository<Scope>,
  ) { }

  async index(): Promise<Scope[]> {
    return await this.scopeRepository.findAll();
  }

  async show(id: string): Promise<Scope> {
    return await this.scopeRepository.findOne({
      where: {
        id,
        relations: ['mod'],
      }
    });
  }

  async create(scope: Scope): Promise<Scope> {
    return await this.scopeRepository.create({ where: { scope } });
  }

  async delete(id: string): Promise<Scope> {
    try {
      const scope = await this.scopeRepository.findOne({ where: { id } });
      await scope.destroy();
      return scope;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
    
    
  }
}
