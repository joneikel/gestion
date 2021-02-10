import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { User } from 'src/entities/user.model';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private usersRepository: Repository<User>,
  ) {}

  async index(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }

  async show(id: string): Promise<User> {
    return await this.usersRepository.findOne({where:{id, 
      relations: ['role', 'institution', 'role.scopes'],
    }});
  }

  async create(user: User): Promise<User> {
    return await this.usersRepository.create({where: {user}});
  }

  async delete(id: string): Promise<User> {
    try {
      const user = await this.usersRepository.findOne({where:{ id }});
      await user.destroy();
      return user;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
    
  }
}
