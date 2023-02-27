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

    for (var vehicle in reduced) {
      sortedSkills.push([vehicle, reduced[vehicle]]);
    }

    sortedSkills.sort((a: any, b: any) => {
      return b[1] - a[1];
    });

    this.skills.principal = sortedSkills.slice(0, this.SKILLS_PRINCIPAL_COUNT);
    this.skills.frequent = sortedSkills.slice(
      this.SKILLS_PRINCIPAL_COUNT,
      this.SKILLS_FREQUENT_COUNT + this.SKILLS_PRINCIPAL_COUNT
    );
    this.skills.others = sortedSkills.slice(
      this.SKILLS_FREQUENT_COUNT + this.SKILLS_PRINCIPAL_COUNT,
      sortedSkills.length
    );
  }

  public getLogoUrl(skillName: string): string {
    return `../../../assets/icons/${skillName}.png`;
  }
}
