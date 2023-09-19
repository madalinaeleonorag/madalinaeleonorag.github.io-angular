import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { GitHubProject } from 'src/app/interfaces/github-project';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: GitHubProject;

  public imageUrl = './../../../assets/image-not-found.png';
  public languagesPercentage: any = {};

  constructor(private commonService: CommonService, private http: HttpClient) {}

  ngOnInit() {
    this.commonService.returnImageURL(this.project.imageUrl).then((res) => {
      this.imageUrl = res;
    });
    this.getRepoLanguagePercentage();
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
        let sumTotalPts = 0;
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
