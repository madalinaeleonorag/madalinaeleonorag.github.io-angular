import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GitHubProject } from '../interfaces/github-project';
import { MediumArticle } from '../interfaces/medium-article';
import { GITHUB_API_URL, MEDIUM_API_URL } from '../constants/CONSTANTS';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  constructor(private http: HttpClient) { }

  /**
   * Get GitHub projects
   * @returns an observable with GitHubProject items
   */
  public getGitHubProjects(): Observable<GitHubProject[]> {
    return this.http.get<any>(GITHUB_API_URL).pipe(
      map((objectItem: any) =>
        objectItem.map(
          (item: any): GitHubProject => ({
            name: item.name,
            description: item.description,
            fullName: item.full_name,
            branch: item.default_branch,
            principalCodingLanguage: item.language,
            url: item.html_url,
            imageUrl: `https://raw.githubusercontent.com/${item.full_name}/${item.default_branch}/demo.png`,
            created: new Date(item.created_at),
          })
        )
      ),
      map((projects) =>
        projects
          .filter(
            (item: GitHubProject) => item.name !== 'madalinaeleonorag.github.io'
          )
          .sort(
            (a: GitHubProject, b: GitHubProject) =>
              b.created.getTime() - a.created.getTime()
          )
          .slice(0, 3)
      )
    );
  }

  /**
   * Get Medium articles
   * @returns an observable with MediumArticle items
   */
  public getMediumArticles() {
    return this.http
      .get<any>(MEDIUM_API_URL)
      .pipe(map((response: any) => response.items))
      .pipe(
        map((objectItem: any) =>
          objectItem.map(
            (item: any): MediumArticle => ({
              categories: item.categories,
              link: item.link,
              title: item.title,
            })
          )
        ),
        map((response) => response.slice(0, 4))
      );
  }
}
