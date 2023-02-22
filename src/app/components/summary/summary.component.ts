import { Component } from '@angular/core';
import * as CONSTANTS from 'src/assets/CONSTANTS';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  public CONSTANTS: any = CONSTANTS;
}
