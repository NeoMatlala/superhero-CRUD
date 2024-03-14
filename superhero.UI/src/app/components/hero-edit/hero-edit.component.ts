import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
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
    name: '',
    firstName: '',
    lastName: '',
    place: ''
  }

  constructor(private router: ActivatedRoute, private route: Router, private _superHeroService: SuperHeroService) {
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

  updateHero() {
    this._superHeroService.updateHero(this.heroId, this.hero).subscribe(
      (response:any) => {
        console.log(response)

        if(response.success) {
          this.route.navigate(["/heroes"])
        }
      },
      error => {
        console.log("Error updating hero: ", error)
      }
    )
  }
}
