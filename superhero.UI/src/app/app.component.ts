import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTableModule,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  

  // Add methods for handling edit and delete actions if needed
  onEdit(element: any) {
    // Handle edit action
  }

  onDelete(element: any) {
    // Handle delete action
  }

  
}
