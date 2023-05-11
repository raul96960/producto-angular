import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaAddComponent } from './pages/categoria-add/categoria-add.component';
import { CategoriaListComponent } from './pages/categoria-list/categoria-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CategoriaListComponent },
  { path: 'add', component: CategoriaAddComponent },
  { path: 'edit/:id', component: CategoriaAddComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
