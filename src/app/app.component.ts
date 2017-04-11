import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
}

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Iron Man'},
  { id: 12, name: 'Torr'},
  { id: 13, name: 'Spyder Man'},
  { id: 14, name: 'Bat Man'},
  { id: 15, name: 'Aqua Man'},
  { id: 16, name: 'Yunha'},
  { id: 17, name: 'Kill bill'},
  { id: 18, name: 'Cheeze'},
  { id: 19, name: 'Zoro'},
  { id: 20, name: 'Nami'},
];
