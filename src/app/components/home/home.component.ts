import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  aboutMe =
    'I’m a junior front-end developer looking for a new role in an exciting company.\
    I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript.\
    When writing JavaScript code, I mostly use Angular, but I can adapt to whatever tools are required.\
    I’m based in Bucharest, Romania, but I’m happy working remotely and have experience in remote teams. \
    When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going \
    for a walk, run or cycling. I’d love you to check out my work.';
    
  ngOnInit(): void {}
}
