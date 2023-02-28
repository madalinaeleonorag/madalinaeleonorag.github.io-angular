import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  TESTIOMNIALS,
  WORK_EXPERIENCE,
  CERTIFICATIONS,
  GITHUB,
  MEDIUM,
} from 'src/assets/CONSTANTS';
import { IGitHubProject } from './interfaces/git-hub-project';
import { IMediumArticle } from './interfaces/medium-article';
import { ExternalService } from './services/external.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private gitHubProjectsSubscription: Subscription = new Subscription();
  private mediumArticlesSubscription: Subscription = new Subscription();

  public gitHubProjects: Array<IGitHubProject> = [];
  public mediumArticles: Array<IMediumArticle> = [];
  public TESTIMONIALS: any;
  public WORK_EXPERIENCE: any = WORK_EXPERIENCE;
  public CERTIFICATIONS: any = CERTIFICATIONS;
  public GITHUB: any = GITHUB;
  public MEDIUM: any = MEDIUM;
  public isSeeLessTestimonials: boolean = true;
  public isSeeLessProjects: boolean = true;

  constructor(private externalService: ExternalService) {}

  ngOnInit() {
    this.gitHubProjectsSubscription = this.externalService
      .getGitHubProjects()
      .subscribe((res: IGitHubProject[]) => {
        this.gitHubProjects = res;
      });

    this.mediumArticlesSubscription = this.externalService
      .getMediumArticles()
      .subscribe((res: IMediumArticle[]) => {
        this.mediumArticles = res.slice(0, 8);
      });
  }

  public filteredTestimonials(): any {
    return this.isSeeLessTestimonials
      ? TESTIOMNIALS.filter((testimonial: any) => testimonial.featured)
      : TESTIOMNIALS;
  }

  public filteredProjects(): any {
    return this.isSeeLessProjects
      ? this.gitHubProjects.slice(0, 12)
      : this.gitHubProjects;
  }

  public switchSeeLessTestimonials(): void {
    this.isSeeLessTestimonials = !this.isSeeLessTestimonials;
  }

  public switchSeeLessProjects(): void {
    this.isSeeLessProjects = !this.isSeeLessProjects;
  }

  public goToGithub(): void {
    window.open(this.GITHUB, '_blank');
  }

  public goToMedium(): void {
    window.open(this.MEDIUM, '_blank');
  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy() {
    this.gitHubProjectsSubscription.unsubscribe();
    this.mediumArticlesSubscription.unsubscribe();
  }
}
