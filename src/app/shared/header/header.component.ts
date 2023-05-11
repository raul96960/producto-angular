import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu: MenuItem[] = [
    {
      texto: 'Producto',
      ruta: './producto'
    },
    {
      texto: 'Categoria',
      ruta: './categoria'
    },
  ];

}
