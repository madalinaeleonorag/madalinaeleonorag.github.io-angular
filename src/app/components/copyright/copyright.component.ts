import { Component } from '@angular/core';
import { COPYRIGHT } from 'src/app/constants/CONSTANTS';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
})
export class CopyrightComponent {
  public COPYRIGHT = COPYRIGHT;
}
