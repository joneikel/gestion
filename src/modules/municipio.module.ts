import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipio } from 'src/entities/municipio.entity';
import { MunicipioService } from 'src/services/municipio.service';
import { MunicipioController } from 'src/controllers/municipio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Municipio])],
  providers: [MunicipioService],
  controllers: [MunicipioController],
})
export class MunicipioModule {}
