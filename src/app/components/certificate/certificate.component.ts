import { Component, Input } from '@angular/core';
import { Certification } from 'src/app/interfaces/certification';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  @Input() certificate: Certification;

  public open(): void {
    window.open(this.certificate.url, '_blank');
  }
}
