import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestimonialDialogComponent } from './testimonial-dialog/testimonial-dialog.component';
import { Testimonial } from 'src/app/interfaces/testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @Input() testimonial: Testimonial;

  constructor(public dialog: MatDialog) {}

  public mapImageLogo(): string {
    const images: any = {
      'Deloitte Digital': 'deloitte-digital.png',
      IBM: 'ibm.png',
      Vodafone: 'vodafone.png',
      'Wooter Apparel': 'wooter-apparel.png',
      'company-not-found': 'company-not-found.png',
    };

    return `../../../../../assets/icons/companies/${
      images[this.testimonial.from]
    }`;
  }

  openDialog() {
    this.dialog.open(TestimonialDialogComponent, {
      data: { ...this.testimonial },
      maxWidth: '70vw',
    });
  }
}
