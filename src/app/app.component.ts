import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of hero';
  heroes = [new Hero(1,'windstorm'),new Hero(2,'bombshell'),new Hero(3,'alexa')];
  myHero = this.heroes[0];
}
