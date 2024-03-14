import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SuperHero } from '../../models/super-hero';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css'
})

export class AddHeroComponent {

  hero: SuperHero = {
    name: '',
    firstName: '',
    lastName: '',
    place: ''
  }

  constructor(private _superHeroService: SuperHeroService, private router: Router) {}

  submitForm() {
    this._superHeroService.createHero(this.hero).subscribe((response: any) => {

      if(response.success) {
        this.router.navigate(["/heroes"])
      }
    },
    error => {
      console.log("Error creating hero:", error)
    })
  }
}
