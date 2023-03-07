import { Component } from '@angular/core';
import * as CONSTANTS from 'src/assets/CONSTANTS';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  public CONSTANTS: any = CONSTANTS;

  public openLink(link: string): void {
    window.open(link, '_blank');
  }
}
