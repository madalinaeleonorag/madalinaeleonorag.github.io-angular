import { Component, Input } from '@angular/core';
import { IMediumArticle } from 'src/app/interfaces/medium-article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: IMediumArticle;

  public openArticle(): void {
    window.open(this.article.link, '_blank');
  }
}
