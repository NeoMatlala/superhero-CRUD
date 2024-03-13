import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SuperHeroService } from '../../services/super-hero.service';
import { SuperHero } from '../../models/super-hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-edit',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule 
  ],
  templateUrl: './hero-edit.component.html',
  styleUrl: './hero-edit.component.css'
})
export class HeroEditComponent {
  heroId: number = 0

  hero: SuperHero = {
    heroId: 0,
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
