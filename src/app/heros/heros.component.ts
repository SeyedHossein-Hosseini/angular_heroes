import { Component } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../services/HeroService/hero.service';
import { MessageService } from '../services/MessageService/message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent {
  HeroValue: string = 'This is hero component';

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  hero1: Hero = {
    id: 1,
    name: 'Spiderman',
  };

  selectedHero?: Hero;

  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeros().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.messageService.add(`Heroes component: Selected hero ${hero.name}`);
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
