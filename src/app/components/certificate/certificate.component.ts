import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  @Input() certificate: any;

  public open(): void {
    window.open(this.certificate.url, '_blank');
  }
}
