import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IGitHubProject } from '../interfaces/git-hub-project';
import { IMediumArticle } from '../interfaces/medium-article';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  private MEDIUM_URL: string =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madalinaeleonorag';
  private GITHUB_URL: string =
    'https://api.github.com/users/madalinaeleonorag/repos?type=public&sort=pushed&per_page=100';

  constructor(private http: HttpClient) {}

  /**
   * Get GitHub projects
   * @returns an observable with IGitHubProject items
   */
  public getGitHubProjects(): Observable<IGitHubProject[]> {
    return this.http.get<any>(this.GITHUB_URL).pipe(
      map((objectItem: any) =>
        objectItem.map(
          (item: any): IGitHubProject => ({
            name: item.name,
            description: item.description,
            fullName: item.full_name,
            branch: item.default_branch,
            principalCodingLanguage: item.language,
            url: item.html_url,
            imageUrl: `https://raw.githubusercontent.com/${item.full_name}/${item.default_branch}/demo.png`,
          })
        )
      )
    );
  }

  /**
   * Get Medium articles
   * @returns an observable with IMediumArticle items
   */
  public getMediumArticles() {
    return this.http
      .get<any>(this.MEDIUM_URL)
      .pipe(map((response: any) => response.items))
      .pipe(
        map((objectItem: any) =>
          objectItem.map(
            (item: any): IMediumArticle => ({
              thumbnail: item.thumbnail,
              link: item.link,
              title: item.title,
            })
          )
        )
      );
  }
}
