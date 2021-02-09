import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scope } from 'src/entities/scope.model';
import { ScopeService } from 'src/services/scope.service';
import { ScopeController } from 'src/controllers/scope.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Scope])],
  providers: [ScopeService],
  controllers: [ScopeController],
})
export class ScopeModule {}
