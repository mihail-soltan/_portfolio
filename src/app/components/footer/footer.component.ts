import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

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
  componentLoaded: boolean = false;
  prevUrl: string = '';
  nextUrl: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this whole thing checks if the previous and next url are both project pages and if so, it doesn't animate the footer
    // the contact conditional is to check whether we should render the section before the footer or not (which happens to be in the same component for some reason)
    setTimeout(() => {
      this.componentLoaded = true;
    }, 1000);
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        pairwise()
      )
      .subscribe(([prev, next]: any) => {
        this.prevUrl = prev.url;
        this.nextUrl = next.url;
        if (
          this.prevUrl.includes('/portfolio/') &&
          this.nextUrl.includes('/portfolio/')
        ) {
          this.componentLoaded = true;
          return;
        }
        this.componentLoaded = false;
        setTimeout(() => {
          this.componentLoaded = true;
        }, 1000);

        if (next.url === '/contact') {
          this.isContactPage = true;
        } else {
          this.isContactPage = false;
        }
      });
  }

  onContactClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      this.router.navigate(['/contact']);
    }, 200);
  }
}
