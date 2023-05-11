import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './pages/producto-list/producto-list.component';
import { ProductoAddComponent } from './pages/producto-add/producto-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ProductoListComponent },
  { path: 'add', component: ProductoAddComponent },
  { path: 'edit/:id', component: ProductoAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
