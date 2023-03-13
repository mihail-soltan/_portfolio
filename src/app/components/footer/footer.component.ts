import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  navItems: any[] = [
    { name: 'HOME', link: '' },
    { name: 'PORTFOLIO', link: 'portfolio' },
    { name: 'CONTACT ME', link: 'contact' },
  ];
  componentLoaded: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.componentLoaded = true;
    }, 1000);
    this.router.events.subscribe(() => {
      this.componentLoaded = false;
      setTimeout(() => {
        this.componentLoaded = true;
      }, 1000);
    });
  }
}
