import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../interfaces/project';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = environment.API_URL;

  projects: Project[] = [];
  currentIndex: number = 0;

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get(this.apiUrl);
  }

  getProjectById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
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
