import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.model';
import { Scope } from './entities/scope.model';
import { Mod } from './entities/mod.model';
import { Role } from './entities/role.model';
import { Project } from './entities/project.model';
import { Institution } from './entities/institution.model';
import { Program } from './entities/program.model';
import { Sector } from './entities/sector.model';
import { Parroquia } from './entities/parroquia.model';
import { Municipio } from './entities/municipio.model';
import { Activity } from './entities/activity.model';
import { Budget } from './entities/budget.model';
import { BudgetSource } from './entities/budgetSource.model';
import { UsersModule } from './modules/users.module';
import { ModModule } from './modules/mod.module';
import { ScopeModule } from './modules/scope.module';
import { RoleModule } from './modules/role.module';
import { InstitutionModule } from './modules/institution.module';
import { SectorModule } from './modules/sector.module';
import { MeasurementModule } from './modules/measurement.module';
import { InvestmentAreaModule } from './modules/invesment_area.module';
import { InvestmentArea } from './entities/investmentArea.model';
import { Measurement } from './entities/measurement.model';
import { MunicipioModule } from './modules/municipio.module';
import { ProjectModule } from './modules/project.module';
import { ProgramModule } from './modules/programModule';
import { ParroquiaModule } from './modules/parroquia.module';
import { ActivityModule } from './modules/activity.module';
import { ImageModule } from './modules/image.module';
import { Image } from './entities/image.model';
import { ProjectStatus } from './entities/projectStatus.model';
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
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'gestion',
      models: [
        User
      ],
      autoLoadModels: true,
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}