import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  getInTouch: string =
    'I’d love to hear about what you’re working on and how I could help. \
    I’m currently looking for a new role and am open to a wide range of opportunities.\
    My preference would be to find a position in a company in London.\
    But I’m also happy to hear about opportunites that don’t fit that description.\
    I’m a hard-working and positive person who will always approach each task with \
    a sense of purpose and attention to detail. Please do feel free to check out my \
    online profiles below and get in touch using the form.';

  name: string = '';
  email: string = '';
  message: string = '';
  sending: boolean = false;

  constructor(private data: DataService) {}

  ngOnInit(): void {}

  check(param: any) {
    console.log(param);
  }
  onSubmit() {
    this.sending = true;
    const emailObj = {
      name: this.name.trim(),
      email: this.email.trim(),
      message: this.message.trim(),
    };
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
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
