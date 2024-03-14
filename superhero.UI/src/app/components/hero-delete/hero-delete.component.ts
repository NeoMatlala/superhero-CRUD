import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute  } from '@angular/router';
import { SuperHero } from '../../models/super-hero';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-hero-delete',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './hero-delete.component.html',
  styleUrl: './hero-delete.component.css'
})
export class HeroDeleteComponent {
  heroId: number = 0

  hero: SuperHero = {
    name: '',
    firstName: '',
    lastName: '',
    place: ''
  }

  constructor(private router: ActivatedRoute, private _superHeroService: SuperHeroService) {
    this.router.params.subscribe(params => {
      this.heroId = params['id']
    })
  }

  ngOnInit() : void {
    this._superHeroService.getSingleSuperhero(this.heroId).subscribe(
      (data: any) => {
        this.hero = data.hero
      },
      error => {
        console.error('Error occured while fetching heroe:', error)
      }
    )
  }
}
