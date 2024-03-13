import { Routes } from '@angular/router';
import { HeroDeleteComponent } from './components/hero-delete/hero-delete.component';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';
import { TableComponent } from './components/table/table.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'hero-delete', component: HeroDeleteComponent},
    {path: 'heroes', component: TableComponent},
    {path: 'hero-edit', component: HeroEditComponent},
];
