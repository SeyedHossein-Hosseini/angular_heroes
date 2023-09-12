import { Component, Input } from '@angular/core';

// The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL.
import { ActivatedRoute } from '@angular/router';

// The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../services/HeroService/hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  hero_: Hero = { id: 0, name: '' };

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero_ = hero));
    // this.heroService.;
  }

  @Input() hero?: Hero;
}
