import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Program } from 'src/entities/program.entity';
import { ProgramService } from 'src/services/program.service';
import { ProgramController } from 'src/controllers/program.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Program])],
  providers: [ProgramService],
  controllers: [ProgramController],
  exports: [TypeOrmModule],
})
export class ProgramModule {}
