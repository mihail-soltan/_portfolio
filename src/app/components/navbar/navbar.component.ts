import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems: string[] = ['HOME', 'PORTFOLIO', 'CONTACT ME'];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.sharedService.toggleMenu();
  }
}
