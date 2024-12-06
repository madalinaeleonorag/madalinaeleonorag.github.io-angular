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

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(TestimonialDialogComponent, {
      data: { ...this.testimonial },
      maxWidth: '70vw',
    });
  }
}
