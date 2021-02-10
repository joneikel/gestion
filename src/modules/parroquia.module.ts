import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Parroquia } from 'src/entities/parroquia.model';
import { ParroquiaService } from 'src/services/parroquia.service';
import { ParroquiaController } from 'src/controllers/parroquia.controller';

@Module({
  imports: [SequelizeModule.forFeature([Parroquia])],
  providers: [ParroquiaService],
  controllers: [ParroquiaController],
})
export class ParroquiaModule {}
