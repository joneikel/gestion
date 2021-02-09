import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from 'src/entities/institution.model';
import { InstitutionService } from 'src/services/institution.service';
import { InstitutionController } from 'src/controllers/institution.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Institution])],
  providers: [InstitutionService],
  controllers: [InstitutionController],
})
export class InstitutionModule {}
