import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @Input() testimonial: any;
  public seeMore: boolean = false;

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

  public isSeeMoreVisible(): boolean {
    return this.testimonial.text.length > 220;
  }

  public testimonialText(): string {
    return this.testimonial.text.length > 220 && !this.seeMore
      ? this.testimonial.text.slice(
          0,
          this.testimonial.text.slice(0, 180).lastIndexOf(' ')
        ) + ' [...]'
      : this.testimonial.text;
  }

  public switchSeeMore(): void {
    this.seeMore = !this.seeMore;
  }
}
