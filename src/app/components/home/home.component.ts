import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from 'src/app/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInAnimation],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  @ViewChild('about') about: ElementRef = new ElementRef(HTMLElement);

  aboutMe =
    'I’m a junior front-end developer looking for a new role in an exciting company.\
    I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript.\
    When writing JavaScript code, I mostly use Angular, but I can adapt to whatever tools are required.\
    I’m based in Bucharest, Romania, but I’m happy working remotely and have experience in remote teams. \
    When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going \
    for a walk, run or cycling. I’d love you to check out my work.';
    
  ngOnInit(): void {}

  goToAboutMe() {
    this.about.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  goToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
}
