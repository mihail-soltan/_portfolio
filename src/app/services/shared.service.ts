import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isHamburgerOpen = new BehaviorSubject(false);

  constructor() {}

  toggleMenu() {
    if (this.isHamburgerOpen.value === false) {
      this.isHamburgerOpen.next(true);
    } else {
      this.isHamburgerOpen.next(false);
    }
  }
}
