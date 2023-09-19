import { Component, ElementRef } from '@angular/core';
import { THEMES } from 'src/app/constants/themes';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  public selectedTheme = THEMES[1].value;
  public themes = THEMES;

  constructor(
    private elementRef: ElementRef,
    private readonly commonService: CommonService
  ) {}

  public openCV(): void {
    this.commonService.openLink('./../../../assets/CV.pdf');
  }

  public setTheme(event: any) {
    if (event === THEMES[1].value) {
      this.elementRef.nativeElement.style.setProperty(
        '--color-primary',
        '170, 25, 116'
      );
      this.elementRef.nativeElement.style.setProperty(
        '--color-secondary',
        '2, 135, 160'
      );
    } else {
      this.elementRef.nativeElement.style.setProperty(
        '--color-primary',
        '151, 80, 60'
      );
      this.elementRef.nativeElement.style.setProperty(
        '--color-secondary',
        '214, 96, 86'
      );
    }
    console.log(event);
  }
}
