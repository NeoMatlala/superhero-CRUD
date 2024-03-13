import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor(private http: HttpClient) { }

  private url = 'https://localhost:7175/api/Superhero/get-all-heroes'
  
  superHeroArray: SuperHero[] = [
    {name: 'Pinky Pinky', firstName: 'Zweli', lastName: 'Khumalo', place: 'Soweto'},
  ];

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(this.url)
  }
}
