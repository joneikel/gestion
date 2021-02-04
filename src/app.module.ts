import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entity';
import { Scope } from './entities/scope.entity';
import { Mod } from './entities/mod.entity';
import { Role } from './entities/role.entity';
import { Project } from './entities/project.entity';
import { Institution } from './entities/institution.entity';
import { Program } from './entities/program.entity';
import { Sector } from './entities/sector.entity';
import { Parroquia } from './entities/parroquia.entity';
import { Municipio } from './entities/municipio.entity';
import { Activity } from './entities/activity.entity';
import { Budget } from './entities/budget.entity';
import { BudgetSource } from './entities/budget_source.entity';
import { UsersModule } from './modules/users.module';
import { ModModule } from './modules/mod.module';
import { ScopeModule } from './modules/scope.module';
import { RoleModule } from './modules/role.module';
import { InstitutionModule } from './modules/institution.module';
import { SectorModule } from './modules/sector.module';
import { MeasurementModule } from './modules/measurement.module';
import { InvestmentAreaModule } from './modules/invesment_area.module';
import { InvestmentArea } from './entities/investment_area.entity';
import { Measurement } from './entities/measurement.entity';
import { MunicipioModule } from './modules/municipio.module';
import { ProjectModule } from './modules/project.module';
import { ProgramModule } from './modules/programModule';
import { ParroquiaModule } from './modules/parroquia.module';
import { ActivityModule } from './modules/activity.module';
import { ImageModule } from './modules/image.module';
import { Image } from './entities/image.entity';
import { ProjectStatus } from './entities/project_status.entity';
import { BudgetSourceModule } from './modules/budget_source.module';
import { ProjectStatusModule } from './modules/project_status.module';
import { BudgetModule } from './modules/budget.module';

@Module({
  imports: [
    UsersModule,
    ModModule,
    MunicipioModule,
    ScopeModule,
    ProgramModule,
    RoleModule,
    ParroquiaModule,
    InstitutionModule,
    ActivityModule,
    SectorModule,
    ImageModule,
    BudgetModule,
    BudgetSourceModule,
    MeasurementModule,
    ProjectModule,
    ProjectStatusModule,
    InvestmentAreaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'gestion',
      entities: [
        User,
        Scope,
        Mod,
        Role,
        Project,
        Budget,
        Institution,
        Program,
        Sector,
        Parroquia,
        Municipio,
        Image,
        Activity,
        BudgetSource,
        InvestmentArea,
        Measurement,
        ProjectStatus,
      ],
      dropSchema: false,
      synchronize: true,
      logNotifications: true,
      logging: ['error', 'info', 'log', 'migration', 'schema', 'warn', 'query'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
