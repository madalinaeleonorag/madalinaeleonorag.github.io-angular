import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import * as CONSTANTS from 'src/assets/CONSTANTS';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public CONSTANTS: any = CONSTANTS;
  public isError: boolean = false;
  public form: FormGroup;
  public name: FormControl = new FormControl('', [Validators.required]);
  public email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public message: FormControl = new FormControl('', [Validators.required]);
  public submitted: boolean = false;
  public isLoading: boolean = false;
  public responseMessage: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
    });

    this.form?.controls?.['message']?.markAsUntouched();
    this.form?.controls?.['name']?.markAsUntouched();
  }

  public isEmailValid(): boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      this.form?.value?.['email']
    );
  }

  public onSubmit(): void {
    if (this.form.status == 'VALID') {
      this.form.disable();
      var formData: any = new FormData();
      formData.append('name', this.form.value.name);
      formData.append('email', this.form.value.email);
      formData.append('message', this.form.value.message);
      this.isLoading = true;
      this.submitted = false;
      this.http
        .post(
          'https://script.google.com/macros/s/AKfycbyikMoUy6eoWihXh6YL8ruZZ9gmZbiC0z9jp2Nvv0Znxsty2kYVgXwbRcFjCZGC3OFlzw/exec',
          formData,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
              'Access-Control-Allow-Headers':
                'Content-Type, Authorization, X-Requested-With',
            },
          }
        )
        .subscribe(
          (response: any) => {
            if (response?.ok) {
              this.isError = false;
              this.responseMessage = 'Thank you! ';
            } else {
              this.isError = true;
              this.responseMessage = 'Oops! Try again.';
            }
            this.form.enable();
            this.submitted = true;
            this.isLoading = false;
          },
          (error) => {
            this.responseMessage = 'Oops! Try again.';
            this.isError = true;
            this.form.enable();
            this.submitted = true;
            this.isLoading = false;
          }
        );
    }
  }
}
