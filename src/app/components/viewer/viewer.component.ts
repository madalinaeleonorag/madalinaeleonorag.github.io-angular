import { Component } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent {
  public srcFile: string = '../../../assets/CV.pdf';
}
