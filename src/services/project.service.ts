import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { InvestmentArea } from 'src/entities/investmentArea.model';
import { Project } from 'src/entities/project.model';

import { BudgetService } from './budget.service';
@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project)
    private projectRepository: Repository<Project>,
    private budgetService: BudgetService,
  ) { }

  async index(): Promise<Project[]> {
    return await this.projectRepository.findAll({
      where: {
        relations: [
          'program',
          'budgets',
          'budgets.budgetSource',
          'measurement',
          'status',
          'investmentAreas',
        ],
      }
    });
  }

  /* async getProjectsFiltered(filter: Partial<Project>): Promise<Project[]> {
    return await this.projectRepository.findOne({where:{filter}});
  } */

  async show(id: string): Promise<Project> {
    return await this.projectRepository.findOne({
      where: {
        id,
        relations: [
          'program',
          'budgets',
          'budgets.budgetSource',
          'measurement',
          'status',
          'investmentAreas',
        ],
      }
    });
  }

  async create(project: Project): Promise<Project> {
    const budgets = project.budget.map((budget) =>
      this.budgetService.create(budget),
    );
    const resolvedBudget = await Promise.all(budgets);
    const investmentAreas = this.generateInvestmentAreasInstances(
      project.investmentArea,
    );
    project.budget = resolvedBudget;
    project.investmentArea = investmentAreas;
    return await this.projectRepository.create(project);
  }

  async delete(id: string): Promise<Project> {
    try {
      const project = await this.projectRepository.findOne({ where: { id } });
      await project.destroy();
      return project;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }

  }

  async countActivities(id: string): Promise<number> {
    const project = await this.projectRepository.findOne({ where: { id } });
    return project.activities.length;
  }

  private generateInvestmentAreasInstances(
    investmentAreas: InvestmentArea[],
  ): InvestmentArea[] {
    return investmentAreas.map((investmentArea) => {
      const ia = new InvestmentArea();
      ia.id = investmentArea.toString();
      return ia;
    });
  }
}
