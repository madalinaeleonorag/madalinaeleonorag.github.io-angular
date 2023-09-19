import { Component } from '@angular/core';
import { SOCIAL_LINKS } from 'src/app/constants/social-links';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  public links = SOCIAL_LINKS;

  constructor(private readonly commonService: CommonService) {}

  public open(link: string): void {
    this.commonService.openLink(link);
  }
}
