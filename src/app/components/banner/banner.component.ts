import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  public selectedTheme = 'magenta';
  public themes = [
    { name: '2022 Light', value: 'light' },
    { name: '2023 Viva Magenta', value: 'magenta' },
    { name: '2024 Paprika', value: 'paprika' },
  ];

  constructor(private elementRef: ElementRef) {}

  public openCV(): void {
    window.open('./../../../assets/CV.pdf', '_blank');
  }

  public setTheme(event: any) {
    if (event === 'magenta') {
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
