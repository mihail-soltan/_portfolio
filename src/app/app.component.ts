import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';
import { fader, slideInAnimation, routeAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation, fader, routeAnimation],
})
export class AppComponent {
  title = 'portfolio2';
  isHamburgerOpen: boolean = false;

  constructor(private sharedService: SharedService) {
    this.sharedService.isHamburgerOpen.subscribe((data) => {
      this.isHamburgerOpen = this.sharedService.isHamburgerOpen.value;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
