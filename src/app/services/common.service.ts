import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  /**
   * Checking if an image is reachable
   * @param url string with the url of the image to be checked
   * @returns either the url of the image, or the path to the fallback image
   */
  public async returnImageURL(url: string): Promise<string> {
    const res: any = await fetch(url, { method: 'HEAD' });
    return res.ok ? url : './../../assets/image-not-found.png';
  }

  // TODO
  public getLogoSVG(logoName: string): string {
    console.log(logoName);
    switch (logoName) {
      case 'email':
        return ``;
      case 'linkedin':
        return ``;
      case 'medium':
        return ` `;
      default:
        return '';
    }
  }
}
