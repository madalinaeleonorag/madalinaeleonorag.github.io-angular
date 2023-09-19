import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GitHubProject } from './interfaces/github-project';
import { MediumArticle } from './interfaces/medium-article';
import { ExternalService } from './services/external.service';
import { slideConfig } from './constants/slide-config';
import { CommonService } from './services/common.service';
import { TESTIOMNIALS } from './constants/testimonials';
import { WORK_EXPERIENCE } from './constants/work-experience';
import { CERTIFICATIONS } from './constants/certifications';
import { SOCIAL_LINKS } from './constants/social-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private gitHubProjectsSubscription: Subscription = new Subscription();
  private mediumArticlesSubscription: Subscription = new Subscription();

  public gitHubProjects: Array<GitHubProject> = [];
  public mediumArticles: Array<MediumArticle> = [];
  public TESTIMONIALS = TESTIOMNIALS;
  public WORK_EXPERIENCE = WORK_EXPERIENCE;
  public CERTIFICATIONS = CERTIFICATIONS;
  public slideConfig = slideConfig;

  constructor(
    private readonly externalService: ExternalService,
    private readonly commonService: CommonService
  ) {}

  ngOnInit() {
    this.gitHubProjectsSubscription = this.externalService
      .getGitHubProjects()
      .subscribe((res: GitHubProject[]) => {
        this.gitHubProjects = res;
      });

    this.mediumArticlesSubscription = this.externalService
      .getMediumArticles()
      .subscribe((res: MediumArticle[]) => {
        this.mediumArticles = res;
      });
  }

  public openLink(type: string): void {
    this.commonService.openLink(
      SOCIAL_LINKS[type as keyof typeof SOCIAL_LINKS]
    );
  }

  ngOnDestroy() {
    this.gitHubProjectsSubscription.unsubscribe();
    this.mediumArticlesSubscription.unsubscribe();
  }
}
