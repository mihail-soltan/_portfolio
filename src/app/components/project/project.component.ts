import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { fader } from 'src/app/animations';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [fader],
})
export class ProjectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router
  ) {}

  project: any = {};
  loading: boolean = true;
  projects: Project[] = [];
  currentIndex = 0;
  previousProject!: Project;
  nextProject!: Project;
  ngOnInit(): void {
    if (this.data.projects.length) {
      this.projects = this.data.projects;
      this.route.paramMap.subscribe((params) => {
        this.getProject();
      });
    } else {
      this.data.getProjects().subscribe((data: any) => {
        this.projects = data;
        this.route.paramMap.subscribe((params) => {
          this.getProject();
        });
      });
    }
  }

  getProject() {
    const projectId = this.route.snapshot.params['id'];
    this.data.getProjectById(projectId).subscribe((data: any) => {
      this.project = data;
      console.log(this.projects);
      this.currentIndex = this.projects.findIndex(
        (project) => project._id === this.project._id
      );
      this.previousProject = this.projects[this.currentIndex - 1];
      this.nextProject = this.projects[this.currentIndex + 1];
      this.loading = false;
      console.log(this.currentIndex);
    });
  }

  goToPreviousProject() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/portfolio', this.previousProject._id]);
    this.data.currentIndex = this.currentIndex - 1;
  }

  goToNextProject() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/portfolio', this.nextProject._id]);
    this.data.currentIndex = this.currentIndex + 1;
  }

  objectExists(obj: any) {
    if (obj === null || obj === undefined) {
      return false;
    }
    return Object.keys(obj).length > 0;
  }
}
