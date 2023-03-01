import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'https://portfolio-backend-production-8506.up.railway.app';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get(this.apiUrl);
  }

  sendEmail(data: any): Promise<any> {
    const url = `${this.apiUrl}/send-email`;
    return from(
      this.http.post(url, data).pipe(
        map((res: any) => {
          if (res.message === 'Email Sent') {
            return 'Email sent successfully';
          } else {
            throw new Error('Email not sent');
          }
        })
      )
    ).toPromise();
  }
}
