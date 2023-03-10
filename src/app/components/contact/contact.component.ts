import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { slideInAnimation } from 'src/app/animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideInAnimation],
})
export class ContactComponent implements OnInit {
  getInTouch: string =
    'I’d love to hear about what you’re working on and how I could help. \
    I’m currently looking for a new role and am open to a wide range of opportunities.\
    My preference would be to find a position in a company in Bucharest.\
    But I’m also happy to hear about opportunites that don’t fit that description.\
    I’m a hard-working and positive person who will always approach each task with \
    a sense of purpose and attention to detail. Please do feel free to check out my \
    online profiles below and get in touch using the form.';

  contactFormGroup: any;

  // email: string = '';
  // message: string = '';
  sending: boolean = false;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    // this.scrollToBottom();
    this.contactFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }
  get name() {
    return this.contactFormGroup.get('name');
  }
  get email() {
    return this.contactFormGroup.get('email');
  }
  get message() {
    return this.contactFormGroup.get('message');
  }

  check() {
    console.log(this.contactFormGroup.status);
  }
  scrollToBottom() {
    const height = document.body.scrollHeight;
    setTimeout(() => {
      window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
    }, 500);
  }
  onSubmit() {
    this.sending = true;
    const emailObj = this.contactFormGroup.value;
    this.data
      .sendEmail(emailObj)
      .then((res) => {
        this.sending = false;
        console.log(res);
      })
      .catch((err) => {
        this.sending = false;
        console.log(err);
      });
    // this.name.reset();
    this.contactFormGroup.reset();
    // this.email = '';
    // this.message = '';
  }
}
