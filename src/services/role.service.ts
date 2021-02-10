import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Role } from 'src/entities/role.model';


@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role)
    private rolesRepository: Repository<Role>,
  ) { }

  async index(): Promise<Role[]> {
    return await this.rolesRepository.findAll();
  }

  async show(id: string): Promise<Role> {
    return await this.rolesRepository.findOne({ where: { id } });
  }

  async create(role: Role): Promise<Role> {
    return await this.rolesRepository.create(role);
  }

  async delete(id: string): Promise<boolean> {
    try {
      const role = await this.rolesRepository.findOne({ where: { id } });
      await role.destroy();
      return true;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
  }
}
