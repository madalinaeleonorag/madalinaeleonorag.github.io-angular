import { Component } from '@angular/core';
import { WORK_EXPERIENCE } from 'src/assets/CONSTANTS';

export class Skill {
  name: string;
  count: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public skills: Skill[] = [];

  constructor() {
    this.sortSkills();
  }

  public sortSkills() {
    let sortedSkills: Skill[] = [];
    let allSkills: any[] = [];

    WORK_EXPERIENCE.forEach((experience) => {
      experience.projects?.forEach((project) =>
        allSkills.push(...project.technologies)
      );
    });

    const reduced: any[] = allSkills.reduce((prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});

    for (var skill in reduced) {
      if (reduced[skill] > 1) {
        sortedSkills.push({ name: skill, count: reduced[skill] });
      }
    }

    const shuffledArray = sortedSkills.sort(
      (a: Skill, b: Skill) => 0.5 - Math.random()
    );

    this.skills = shuffledArray;
  }

  public getLogoUrl(skillName: string): string {
    return `../../../assets/icons/${skillName}.png`;
  }

  public switchClases(skill: Skill): string {
    switch (true) {
      case skill.count === 2:
        return 'small';
      case skill.count > 2 && skill.count <= 4:
        return 'medium';
      case skill.count > 4:
        return 'big';
      default:
        return 'small';
    }
  }
}
