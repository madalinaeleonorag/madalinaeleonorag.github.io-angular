import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TESTIOMNIALS, WORK_EXPERIENCE } from 'src/assets/CONSTANTS';
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

  ngOnDestroy() {
    this.gitHubProjectsSubscription.unsubscribe();
  }
}
