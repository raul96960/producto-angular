import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoAddComponent } from './pages/producto-add/producto-add.component';
import { ProductoListComponent } from './pages/producto-list/producto-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductoAddComponent,
    ProductoListComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductoModule { }
