import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor(private http: HttpClient) { }

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>("https://localhost:7175/api/Superhero/get-all-heroes")
  }

  // get single superhero
  public getSingleSuperhero(heroId: number): Observable<SuperHero>{
    return this.http.get<SuperHero>(`https://localhost:7175/api/Superhero/get-hero/${heroId}`)
  }

  // TODO: Create supehero
  public createHero(hero: SuperHero): Observable<SuperHero> {
    return this.http.post<SuperHero>("https://localhost:7175/api/Superhero/create-hero", hero)
  }
}
