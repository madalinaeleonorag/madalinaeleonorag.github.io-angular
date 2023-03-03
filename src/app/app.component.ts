import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  public slideConfig: any = {
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
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
  public activeRoute: string = 'banner';
  public anchors: string[] = [
    'page1',
    'page2',
    'page3',
    'page4',
    'page5',
    'page6',
    'page7',
    'page8',
    'page9',
  ];
  public idAnchors: any = {
    banner: 'page1',
    summary: 'page2',
    skills: 'page3',
    companies: 'page4',
    certifications: 'page5',
    projects: 'page6',
    publications: 'page7',
    testimonials: 'page8',
    contact: 'page9',
  };

  config: any;
  fullpage_api: any;

  constructor(
    private externalService: ExternalService,
    private router: Router
  ) {
    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: 'gplv3-license',
      anchors: this.anchors,
    };

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event?.url;
      }
    });
  }

  ngOnInit() {
    this.gitHubProjectsSubscription = this.externalService
      .getGitHubProjects()
      .subscribe((res: IGitHubProject[]) => {
        this.gitHubProjects = res.slice(0, 2);
      });

    this.mediumArticlesSubscription = this.externalService
      .getMediumArticles()
      .subscribe((res: IMediumArticle[]) => {
        this.mediumArticles = res.slice(0, 4);
      });
  }

  public getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  public isActiveClass(id: string): boolean {
    return this.activeRoute.includes(this.idAnchors[id]);
  }

  public filteredTestimonials(): any {
    return TESTIOMNIALS.filter((testimonial: any) => testimonial.featured);
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
