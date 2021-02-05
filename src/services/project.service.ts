import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentArea } from 'src/entities/investment_area.entity';
import { Project } from 'src/entities/project.entity';
import { Repository } from 'typeorm';
import { BudgetService } from './budget.service';
@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    private budgetService: BudgetService,
  ) {}

  async index(filters: any): Promise<Project[]> {
    return await this.projectRepository.find({
      relations: [
        'program',
        'measurement',
        'status',
        'activities',
        'investmentAreas',
        'budgets',
      ],
    });
  }

  async getProjectsFiltered(filter: Partial<Project>): Promise<Project[]> {
    return await this.projectRepository.find(filter);
  }

  async show(id: string): Promise<Project> {
    return await this.projectRepository.findOne(id, {
      relations: [
        'program',
        'budgets',
        'budgets.budgetSource',
        'measurement',
        'status',
        'investmentAreas',
      ],
    });
  }

  async create(project: Project): Promise<Project> {
    const budgets = project.budgets.map((budget) =>
      this.budgetService.create(budget),
    );
    const resolvedBudget = await Promise.all(budgets);
    const investmentAreas = this.generateInvestmentAreasInstances(
      project.investmentAreas,
    );
    project.budgets = resolvedBudget;
    project.investmentAreas = investmentAreas;
    return await this.projectRepository.save(project);
  }

  async update(projectData: Project): Promise<Project> {
    const project = await this.projectRepository.update(
      { id: projectData.id },
      projectData,
    );
    return project.raw;
  }

  async delete(id: string): Promise<Project> {
    const project = await this.projectRepository.delete({ id });
    return project.raw;
  }

  async countActivities(id: string): Promise<number> {
    const project = await this.projectRepository.findOne(id);
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
