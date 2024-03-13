import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute  } from '@angular/router';
import { SuperHero } from '../../models/super-hero';

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

  // use this object to insert hero from getHero
  hero: SuperHero = {
    heroId: 0,
    name: '',
    firstName: '',
    lastName: '',
    place: ''
  }

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.heroId = params['id']
    })
  }
}
