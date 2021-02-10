import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/entities/role.model';
import { RoleService } from 'src/services/role.service';
import { RoleController } from 'src/controllers/role.controller';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
