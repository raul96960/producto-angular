import { Component } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent {
  dataSource: any = '';

  constructor(private categoriaService: CategoriaService,private router:Router) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.categoriaService.getCategorias().subscribe((categoria) => {
      //console.log(categoria);
      this.dataSource = categoria;
    });
  }

  borrar(id: number) {
    this.categoriaService.deleteCategoria(id).subscribe(( _)=>{
      this.listar();
    });

  }

  agregar() {
    this.router.navigate(['/categoria/add'])
  }

  editar(id: number) {
    this.router.navigate(['/categoria/edit/' + id])
  }

}
