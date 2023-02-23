import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @Input() testimonial: any;

  public mapImageLogo(): string {
    const images: any = {
      'Deloitte Digital': 'deloitte-digital.png',
      IBM: 'ibm.png',
      Vodafone: 'vodafone.png',
      'Wooter Apparel': 'wooter-apparel.png',
    };

    return `url(../../../../../assets/icons/companies/${
      images[this.testimonial.from]
    })`;
  }
}
