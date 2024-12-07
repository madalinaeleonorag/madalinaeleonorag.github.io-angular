import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GitHubProject } from 'src/app/interfaces/github-project';
import { CommonService } from 'src/app/services/common.service';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: GitHubProject;

  public languagesPercentage: any = {};

  constructor(private commonService: CommonService, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
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

  public openImage(): void {
    this.dialog.open(ImageDialogComponent, {
      data: this.project.imageUrl,
      maxHeight: '80vh',
    });
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
