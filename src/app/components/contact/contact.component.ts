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

  form: FormGroup;
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  message: FormControl = new FormControl('', [Validators.required]);
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  onSubmit() {
    if (this.form.status == 'VALID') {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      console.log(this.form);
      formData.append('name', this.form.value.name);
      formData.append('email', this.form.value.email);
      formData.append('message', this.form.value.message);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http
        .post(
          'https://script.google.com/macros/s/AKfycbyikMoUy6eoWihXh6YL8ruZZ9gmZbiC0z9jp2Nvv0Znxsty2kYVgXwbRcFjCZGC3OFlzw/exec',
          formData
        )
        .subscribe(
          (response: any) => {
            // choose the response message
            if (response && response?.result && response?.result == 'success') {
              this.responseMessage =
                "Thanks for the message! I'll get back to you soon!";
            } else {
              this.responseMessage =
                'Oops! Something went wrong... Reload the page and try again.';
            }
            this.form.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
            console.log(response);
          },
          (error) => {
            this.responseMessage =
              'Oops! An error occurred... Reload the page and try again.';
            this.form.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
            console.log(error);
          }
        );
    }
  }
}
