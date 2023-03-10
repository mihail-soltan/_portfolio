import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { slideInAnimation } from 'src/app/animations';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [slideInAnimation],
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];
  loading: boolean = true;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.data.getProjects().subscribe((data: any) => {
      this.projects = data;
      this.loading = false;
      console.log(data)
    });
  }
}
