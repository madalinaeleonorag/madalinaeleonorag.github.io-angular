import { HttpClient } from '@angular/common/http';
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
  @Input() position: string;

  public imageUrl: string = './../../../assets/image-not-found.png';
  public languagesPercentage: any = {};

  constructor(private commonService: CommonService, private http: HttpClient) {}

  ngOnInit() {
    this.commonService.returnImageURL(this.project.imageUrl).then((res) => {
      this.imageUrl = res;
    });
    this.getRepoLanguagePercentage();
  }

  public openProject(): void {
    window.open(this.project.url, '_blank');
  }

  public projectDescription(): string {
    return this.project?.description?.length > 90
      ? (
          this.project?.description?.slice(
            0,
            this.project?.description?.slice(0, 90).lastIndexOf(' ')
          ) + ' [...]'
        )?.trim()
      : this.project?.description?.trim();
  }

  private getRepoLanguagePercentage() {
    this.http
      .get(
        'https://api.github.com/repos/madalinaeleonorag/' +
          this.project.name +
          '/languages'
      )
      .subscribe((responseObj: any) => {
        const totalPtsArr = Object.values(responseObj);
        var sumTotalPts = 0;
        totalPtsArr.forEach((pts: any) => {
          sumTotalPts += pts;
        });

        Object.keys(responseObj).forEach((lang: any) => {
          this.languagesPercentage[lang] = Math.round(
            (responseObj[lang] * 100) / sumTotalPts
          );
        });
      });
  }
}
