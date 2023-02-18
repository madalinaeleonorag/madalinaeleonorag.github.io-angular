import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor(private externalService: ExternalService) {}

  ngOnInit() {
    this.gitHubProjectsSubscription = this.externalService
      .getGitHubProjects()
      .subscribe((res: IGitHubProject[]) => {
        this.gitHubProjects = res;
      });
  }

  ngOnDestroy() {
    this.gitHubProjectsSubscription.unsubscribe();
  }
}
