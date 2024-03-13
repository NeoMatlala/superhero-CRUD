import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-edit',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './hero-edit.component.html',
  styleUrl: './hero-edit.component.css'
})
export class HeroEditComponent {
  heroId: number = 0
  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.heroId = params['id']
    })
  }
}
