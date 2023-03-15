import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { routeAnimation } from 'src/app/animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [routeAnimation],
})
export class ContactComponent implements OnInit {
  getInTouch: string =
    'I am interested in learning about your current projects and how I may be of assistance. \
    As I am actively seeking new employment opportunities, I am open to a variety of roles.\
    Ideally, I would like to secure a position within a company based in Bucharest, although \
    I am willing to consider other options. My work ethic is both diligent and optimistic, and\
    I approach every task with a strong sense of purpose and meticulous attention to detail.\
    I invite you to peruse my online profiles listed below and contact me using the provided form.';

  contactFormGroup: any;
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
      })
      .catch((err) => {
        this.sending = false;
        console.log(err);
      });
    this.contactFormGroup.reset();
  }
}
