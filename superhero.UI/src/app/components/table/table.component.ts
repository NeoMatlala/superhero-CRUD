import { Component } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SuperHeroService } from '../../services/super-hero.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  heroes: SuperHero[] = []
  displayedColumns: string[] = ['name', 'firstName', 'lastName', 'place', 'options'];
  dataSource: MatTableDataSource<SuperHero> = new MatTableDataSource<SuperHero>(); // Change made here

  constructor(private _superHeroService: SuperHeroService){}

  ngOnInit(): void {
    this._superHeroService.getSuperHeroes().subscribe(
      (data :SuperHero[]) => {
        this.heroes = data
        this.dataSource.data = this.heroes;
      },
      error => {
        console.error('Error occured while fetching heroes:', error)
      }
    )
  }
}
