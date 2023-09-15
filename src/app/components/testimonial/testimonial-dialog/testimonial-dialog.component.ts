import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Testimonial } from 'src/app/interfaces/testimonial';

@Component({
  selector: 'app-testimonial-dialog',
  templateUrl: './testimonial-dialog.component.html',
  styleUrls: ['./testimonial-dialog.component.scss'],
})
export class TestimonialDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Testimonial) {}

  public mapImageLogo(): string {
    const images: any = {
      'Deloitte Digital': 'deloitte-digital.png',
      IBM: 'ibm.png',
      Vodafone: 'vodafone.png',
      'Wooter Apparel': 'wooter-apparel.png',
      'company-not-found': 'company-not-found.png',
    };

    return `../../../../../assets/icons/companies/${images[this.data.from]}`;
  }
}
