import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() scrollEmit = new EventEmitter<HTMLElement>();

  public show: boolean = false;
  public top: any = {
    value: '#',
    text: '⬆️',
    tooltip: 'Go to the top',
  };
  public categories: any[] = [
    {
      value: '#cv',
      text: '📃',
      tooltip: 'CV',
    },
    {
      value: '#skills',
      text: '🌟',
      tooltip: 'Skills',
    },
    {
      value: '#work',
      text: '📁',
      tooltip: 'Work experience',
    },
    {
      value: '#certifications',
      text: '🏆',
      tooltip: 'Certifications',
    },
    {
      value: '#projects',
      text: '💻',
      tooltip: 'Latest projects',
    },
    {
      value: '#publications',
      text: '✏️',
      tooltip: 'Publications',
    },
    {
      value: '#testimonials',
      text: '💬',
      tooltip: 'Testimonials',
    },
    {
      value: '#contact',
      text: '💌',
      tooltip: 'Contact me',
    },
  ];

  public toggleHideShow(): void {
    this.show = !this.show;
  }

  public navigateTo(target: HTMLElement) {
    console.log(target);
    this.scrollEmit.emit(target);
  }

  public openCV(): void {
    window.open('./../../../assets/CV.pdf', '_blank');
  }
}
