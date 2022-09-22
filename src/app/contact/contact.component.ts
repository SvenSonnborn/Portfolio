import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  send = false;

  /**
   * This is bind to ngForm's InputFields in Template File
   */
  contact = {
    name: '', //Bind  to InputField name="name"
    email: '', //Bind to InputField name="email"
    message: '', //Bind to InputField name="message"
  };

  /**
   * A post request construct configuration
   */
  post = {
    // Where to send the post request Ex. http://my-domain/sendMail.php
    //or https://my-domain/sendMail.php if you have SSL-Certificate Active
    endPoint: 'https://svensonnborn.com/sendMail.php',
    // What to send, notice JSON.stringify
    body: (payload: any) => JSON.stringify(payload),
    // How to send, notice Content-Type and responseType
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  /**
   * Do not forget to import FormsModule in app.module.ts
   */
  onSubmit(ngForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => {
            console.log(response);
            // Here Message was send
          },
          error: (error) => {
            console.error(error);
            // Here Message was not send!!!!!
          },
          complete: () => console.info('send post complete'),
        });
        this.contact.name = '';
        this.contact.email = '';
        this.contact.message= '';
        this.send = true
    }
  }
}
