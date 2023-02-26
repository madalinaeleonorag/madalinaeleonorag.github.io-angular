import { Component } from '@angular/core';
import * as CONSTANTS from 'src/assets/CONSTANTS';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public CONSTANTS: any = CONSTANTS;

  public openCV(): void {
    window.open('./../../../assets/CV.pdf');
  }
}
