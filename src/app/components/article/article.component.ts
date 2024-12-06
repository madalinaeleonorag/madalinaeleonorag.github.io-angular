import { Component, Input } from '@angular/core';
import { MediumArticle } from 'src/app/interfaces/medium-article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: MediumArticle;
}
