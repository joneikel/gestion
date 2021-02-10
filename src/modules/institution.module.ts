import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Institution } from 'src/entities/institution.model';
import { InstitutionService } from 'src/services/institution.service';
import { InstitutionController } from 'src/controllers/institution.controller';

@Module({
  imports: [SequelizeModule.forFeature([Institution])],
  providers: [InstitutionService],
  controllers: [InstitutionController],
})
export class InstitutionModule {}
