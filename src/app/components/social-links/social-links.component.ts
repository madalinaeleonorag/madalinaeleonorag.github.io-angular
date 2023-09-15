import { Component } from '@angular/core';
import { SOCIAL_LINKS } from 'src/assets/CONSTANTS';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  public links: any = SOCIAL_LINKS;

  public openLink(link: string): void {
    window.open(link, '_blank');
  }
}
