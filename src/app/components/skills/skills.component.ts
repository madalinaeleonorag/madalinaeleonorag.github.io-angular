import { Component } from '@angular/core';
import { WORK_EXPERIENCE } from 'src/assets/CONSTANTS';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  private SKILLS_PRINCIPAL_COUNT = 5;
  private SKILLS_FREQUENT_COUNT = 10;

  public skills: any = {
    principal: [],
    frequent: [],
    others: [],
  };

  constructor() {
    this.sortSkills();
  }

  private sortSkills() {
    let sortedSkills: any = [];
    let allSkills: any[] = [];

    WORK_EXPERIENCE.forEach((experience) => {
      experience.projects?.forEach((project) =>
        allSkills.push(...project.technologies)
      );
    });

    const reduced: any = allSkills.reduce((prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});

    for (var skill in reduced) {
      sortedSkills.push([skill, reduced[skill]]);
    }

    const shuffledArray = sortedSkills.sort(
      (a: any, b: any) => 0.5 - Math.random()
    );
    this.skills = shuffledArray;
  }

  public getLogoUrl(skillName: string): string {
    return `../../../assets/icons/${skillName}.png`;
  }

  public switchClases(skill: any): string {
    switch (true) {
      case skill[1] === 1:
        return 'small';
      case skill[1] > 1 && skill[1] <= 4:
        return 'medium';
      case skill[1] > 4:
        return 'big';
      default:
        return 'small';
    }
  }
}
