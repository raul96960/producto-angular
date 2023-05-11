import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaAddComponent } from './pages/categoria-add/categoria-add.component';
import { CategoriaListComponent } from './pages/categoria-list/categoria-list.component';


@NgModule({
  declarations: [
    CategoriaAddComponent,
    CategoriaListComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,

    ReactiveFormsModule,
  ]
})
export class CategoriaModule { }
