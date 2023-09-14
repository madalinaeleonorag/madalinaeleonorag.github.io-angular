import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  public openCV(): void {
    window.open('./../../../assets/CV.pdf', '_blank');
  }
}
