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
    `Hey there! I'm a front-end developer on the lookout for a new gig in an exciting company.\
    I'm all about creating sleek and accessible HTML, utilizing modern CSS practices, and writing \
    clean JavaScript. My go-to framework is Angular, but I'm always up for exploring new tools. \
    Plus, I've got experience with Node.JS, Express, Mongoose, and MongoDB under my belt. <br><br>

    I'm based in Bucharest, Romania, but I'm totally down for remote work and have experience 
    working in remote teams. When I'm not busy coding, I enjoy playing guitar and whipping up 
    some delicious dishes in the kitchen. Oh, and I love spending time outdoors too! Whether 
    it's going for a hike, taking a leisurely bike ride, or just chilling in nature, I'm all about it. <br><br>
    If you're interested in checking out my work or learning more about me, let's chat!`;
    
  ngOnInit(): void {}

  goToAboutMe() {
    this.about.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  goToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
}
