import { Component, Input } from '@angular/core';
import { IGitHubProject } from 'src/app/interfaces/git-hub-project';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project: IGitHubProject;
  public imageUrl: string = './../../../assets/image-not-found.png';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.returnImageURL(this.project.imageUrl).then((res) => {
      this.imageUrl = res;
    });
  }

  public openProject(): void {
    window.open(this.project.url, '_blank');
  }

  public projectDescription(): string {
    return this.project?.description?.length > 90
      ? this.project.description.slice(
          0,
          this.project.description.slice(0, 90).lastIndexOf(' ')
        ) + ' [...]'
      : this.project.description;
  }
}
