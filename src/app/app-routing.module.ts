import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'categoria',
    pathMatch: 'full'
  },
  {
    path: 'categoria',
    loadChildren: () =>
      import('./modules/categoria/categoria.module').then((m) => m.CategoriaModule),
  },
  {
    path: 'producto',
    loadChildren: () =>
      import('./modules/producto/producto.module').then((m) => m.ProductoModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
