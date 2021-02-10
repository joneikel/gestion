import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parroquia } from 'src/entities/parroquia.model';
import { ParroquiaService } from 'src/services/parroquia.service';
import { ParroquiaController } from 'src/controllers/parroquia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Parroquia])],
  providers: [ParroquiaService],
  controllers: [ParroquiaController],
})
export class ParroquiaModule {}
