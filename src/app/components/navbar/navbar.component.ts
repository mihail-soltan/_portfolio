import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems: any[] = [
    { name: 'HOME', link: '/' },
    { name: 'PORTFOLIO', link: '/portfolio' },
    { name: 'CONTACT ME', link: '/contact' },
  ];
  isHamburgerOpen: boolean = false;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {}

  toggleMenu() {
    // this.sharedService.toggleMenu();
    console.log(this.isHamburgerOpen)
  }

  onNavItemClick(link: string) {
    this.isHamburgerOpen = false;
    this.sharedService.isHamburgerOpen.next(false);
    this.router.navigate([link]);
  }
}
