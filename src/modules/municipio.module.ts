import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Municipio } from 'src/entities/municipio.model';
import { MunicipioService } from 'src/services/municipio.service';
import { MunicipioController } from 'src/controllers/municipio.controller';

@Module({
  imports: [SequelizeModule.forFeature([Municipio])],
  providers: [MunicipioService],
  controllers: [MunicipioController],
})
export class MunicipioModule {}
