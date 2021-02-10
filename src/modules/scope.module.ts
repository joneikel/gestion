import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Scope } from 'src/entities/scope.model';
import { ScopeService } from 'src/services/scope.service';
import { ScopeController } from 'src/controllers/scope.controller';

@Module({
  imports: [SequelizeModule.forFeature([Scope])],
  providers: [ScopeService],
  controllers: [ScopeController],
})
export class ScopeModule {}
