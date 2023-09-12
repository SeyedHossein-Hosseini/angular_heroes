import { Injectable } from '@angular/core';
import { Hero } from '../../hero';
import { Observable, from, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from '../MessageService/message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private apiUrl: string = 'http://localhost:3000/heros';

  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heros');
    return this.http.get<Hero[]>(this.apiUrl, httpOptions);
    // const heroes = of(HEROES);
    // return heroes;
  }

  getHero(ID: number): Observable<Hero> {
    // let selectedHero = HEROES.filter((HERO) => HERO.id === ID);
    // const hero = of(selectedHero[0]);
    // console.log({ hero });
    // return hero;

    return this.http.get<Hero>(this.apiUrl + `/${ID}`, httpOptions);
  }
}
