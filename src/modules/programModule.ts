import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Program } from 'src/entities/program.model';
import { ProgramService } from 'src/services/program.service';
import { ProgramController } from 'src/controllers/program.controller';

@Module({
  imports: [SequelizeModule.forFeature([Program])],
  providers: [ProgramService],
  controllers: [ProgramController],
  exports: [SequelizeModule],
})
export class ProgramModule {}
