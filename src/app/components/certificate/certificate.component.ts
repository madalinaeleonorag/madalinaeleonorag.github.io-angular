import { Component, Input } from '@angular/core';
import { Certification } from 'src/app/interfaces/certification';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  @Input() certificate: Certification;

  constructor(private readonly commonService: CommonService) {}

  public open(): void {
    this.commonService.openLink(this.certificate.url);
  }
}
