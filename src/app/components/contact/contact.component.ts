import { Component } from '@angular/core';
import * as CONSTANTS from 'src/assets/CONSTANTS';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public CONSTANTS: any = CONSTANTS;
}
