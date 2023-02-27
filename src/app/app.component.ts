import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  TESTIOMNIALS,
  WORK_EXPERIENCE,
  CERTIFICATIONS,
  GITHUB,
} from 'src/assets/CONSTANTS';
import { IGitHubProject } from './interfaces/git-hub-project';
import { ExternalService } from './services/external.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private gitHubProjectsSubscription: Subscription = new Subscription();

  public gitHubProjects: Array<IGitHubProject> = [];
  public TESTIMONIALS: any;
  public WORK_EXPERIENCE: any = WORK_EXPERIENCE;
  public CERTIFICATIONS: any = CERTIFICATIONS;
  public GITHUB: any = GITHUB;
  public isSeeLessTestimonials: boolean = true;

  constructor(private externalService: ExternalService) {}

  ngOnInit() {
    this.gitHubProjectsSubscription = this.externalService
      .getGitHubProjects()
      .subscribe((res: IGitHubProject[]) => {
        this.gitHubProjects = res.slice(0, 15);
      });
  }

  public filteredTestimonials(): any {
    return this.isSeeLessTestimonials
      ? TESTIOMNIALS.filter((testimonial: any) => testimonial.featured)
      : TESTIOMNIALS;
  }

  public switchSeeLessTestimonials(): void {
    this.isSeeLessTestimonials = !this.isSeeLessTestimonials;
  }

  public goToGithub(): void {
    window.open(this.GITHUB, '_blank');
  }

  ngOnDestroy() {
    this.gitHubProjectsSubscription.unsubscribe();
  }
}
