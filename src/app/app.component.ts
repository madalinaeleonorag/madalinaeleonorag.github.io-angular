import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  TESTIOMNIALS,
  WORK_EXPERIENCE,
  CERTIFICATIONS,
  SOCIAL_LINKS,
} from 'src/assets/CONSTANTS';
import { IGitHubProject } from './interfaces/git-hub-project';
import { IMediumArticle } from './interfaces/medium-article';
import { ExternalService } from './services/external.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private gitHubProjectsSubscription: Subscription = new Subscription();
  private mediumArticlesSubscription: Subscription = new Subscription();

  public gitHubProjects: Array<IGitHubProject> = [];
  public mediumArticles: Array<IMediumArticle> = [];
  public TESTIMONIALS = TESTIOMNIALS;
  public WORK_EXPERIENCE = WORK_EXPERIENCE;
  public CERTIFICATIONS = CERTIFICATIONS;
  public slideConfig = {
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  constructor(private externalService: ExternalService) {}

  ngOnInit() {
    this.gitHubProjectsSubscription = this.externalService
      .getGitHubProjects()
      .subscribe((res: IGitHubProject[]) => {
        this.gitHubProjects = res
          .filter(
            (item: IGitHubProject) =>
              item.name !== 'madalinaeleonorag.github.io'
          )
          .sort(
            (a: IGitHubProject, b: IGitHubProject) =>
              b.created.getTime() - a.created.getTime()
          )
          .slice(0, 3);
      });

    this.mediumArticlesSubscription = this.externalService
      .getMediumArticles()
      .subscribe((res: IMediumArticle[]) => {
        this.mediumArticles = res.slice(0, 4);
      });
  }

  public goToGithub(): void {
    window.open(SOCIAL_LINKS.GITHUB, '_blank');
  }

  public goToMedium(): void {
    window.open(SOCIAL_LINKS.MEDIUM, '_blank');
  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy() {
    this.gitHubProjectsSubscription.unsubscribe();
    this.mediumArticlesSubscription.unsubscribe();
  }
}
