import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { fader } from 'src/app/animations';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [fader],
})
export class ProjectComponent implements OnInit {

  projectId = new BehaviorSubject<any>('');
  project: any = {};
  loading: boolean = true;
  projects: Project[] = [];
  currentIndex = 0;
  previousProject!: Project;
  nextProject!: Project;
  safeBackground?: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.projectId.next(id);
      this.loading = true;
      this.data.getProjects().subscribe((data: any) => {
        this.projects = data;
        this.project = this.projects.find(
          (project) => project._id === this.projectId.value
        );
        this.safeBackground = this.sanitizer.bypassSecurityTrustHtml(
          this.project.background
        );
        this.currentIndex = this.projects.findIndex(
          (project) => project._id === this.project._id
        );
        this.previousProject = this.projects[this.currentIndex - 1];
        this.nextProject = this.projects[this.currentIndex + 1];
        this.loading = false;
        console.log(this.safeBackground);
      });
    });
  }

  getProject() {
    this.loading = true;
    const projectId = this.route.snapshot.params['id'];
    this.data.getProjectById(projectId).subscribe((data: any) => {
      this.project = data;
      this.currentIndex = this.projects.findIndex(
        (project) => project._id === this.project._id
      );
      this.previousProject = this.projects[this.currentIndex - 1];
      this.nextProject = this.projects[this.currentIndex + 1];
      this.loading = false;
    });
  }

  goToPreviousProject() {
    this.router.navigate(['/portfolio', this.previousProject._id]);
    this.data.currentIndex = this.currentIndex - 1;
  }

  goToNextProject() {
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
