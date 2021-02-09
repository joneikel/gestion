import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Scope as Scope } from 'src/entities/scope.model';
import { Repository } from 'typeorm';

@Injectable()
export class ScopeService {
  constructor(
    @InjectRepository(Scope)
    private scopeRepository: Repository<Scope>,
  ) {}

  async index(): Promise<Scope[]> {
    return await this.scopeRepository.find();
  }

  async show(id: string): Promise<Scope> {
    return await this.scopeRepository.findOne(id, {
      relations: ['mod'],
    });
  }

  async create(scope: Scope): Promise<Scope> {
    return await this.scopeRepository.save(scope);
  }

  async update(scopeData: Scope): Promise<Scope> {
    const scope = await this.scopeRepository.update(
      { id: scopeData.id },
      scopeData,
    );
    return scope.raw;
  }

  async delete(id: string): Promise<Scope> {
    const scope = await this.scopeRepository.delete({ id });
    return scope.raw;
  }
}
