import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { slideInAnimation } from 'src/app/animations';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [slideInAnimation],
})
export class ProjectComponent implements OnInit {
  constructor(private route: ActivatedRoute, private data: DataService) {}

  project: any = {};

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    const projectId = this.route.snapshot.params['id'];
    this.data.getProjectById(projectId).subscribe((data: any) => {
      this.project = data;
      console.log(data);
    });
  }
}
