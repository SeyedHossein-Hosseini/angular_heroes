import { Component } from '@angular/core';

import { HeroService } from '../services/HeroService/hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private heroService: HeroService) {}

  TopHeroes: Hero[] = [];

  ngOnInit(): void {
    this.getTopHeroes();
  }

  getTopHeroes(): void {
    this.heroService
      .getHeros()
      .subscribe((heroes) => (this.TopHeroes = heroes.slice(1, 5)));
  }
}
