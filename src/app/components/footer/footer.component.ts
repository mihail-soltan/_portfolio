import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  // navItems: string[] = ['HOME', 'PORTFOLIO', 'CONTACT ME'];
  navItems: any[] = [
    { name: 'HOME', link: '' },
    { name: 'PORTFOLIO', link: 'portfolio' },
    { name: 'CONTACT ME', link: 'contact' },
  ];
  isContactPage: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/contact') {
          this.isContactPage = true;
        } else {
          this.isContactPage = false;
        }
      }
    });
  }

  onContactClick() {
    window.scrollTo(0, 0);
    this.router.navigate(['/contact']);
  }
}
