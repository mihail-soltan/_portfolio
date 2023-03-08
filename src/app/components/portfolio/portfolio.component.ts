import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.data.getProjects().subscribe((data: any) => {
      console.log(data);
    })
  }

}
