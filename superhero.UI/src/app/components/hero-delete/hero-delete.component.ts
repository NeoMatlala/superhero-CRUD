import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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

}
