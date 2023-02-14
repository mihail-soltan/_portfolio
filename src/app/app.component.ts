import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio2';
  isHamburgerOpen: boolean = false;

  constructor(private sharedService: SharedService) {
    this.sharedService.isHamburgerOpen.subscribe((data) => {
      this.isHamburgerOpen = this.sharedService.isHamburgerOpen.value;
    });
  }
}
