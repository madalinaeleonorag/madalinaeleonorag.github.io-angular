import { Component } from '@angular/core';
import { SUMMARY } from 'src/assets/CONSTANTS';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  public SUMMARY: any = SUMMARY;
}
