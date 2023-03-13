import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContactClick() {
    this.router.navigate(['/contact']);
}
}
