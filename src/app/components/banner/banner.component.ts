import { Component } from '@angular/core';
import * as CONSTANTS from 'src/assets/CONSTANTS';

declare let particlesJS: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  public CONSTANTS: any = CONSTANTS;

  ngOnInit(): void {
    particlesJS('particles-js', '../../../assets/particles.json', null);
  }

  public openCV(): void {
    window.open('./../../../assets/CV.pdf');
  }
}
