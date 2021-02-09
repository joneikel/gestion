import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/entities/user.model';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() data): Promise<User> {
    return await this.usersService.create(data as User);
  }

  @Get(':id')
  async getScope(@Param() id: string) {
    return await this.usersService.show(id);
  }
}
