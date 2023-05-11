import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent {
  dataSource: any = '';

  constructor(private productoService: ProductoService,private router:Router) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.productoService.getProductos().subscribe((producto) => {
      //console.log(producto);
      this.dataSource = producto;
    });
  }

  borrar(id: number) {
    this.productoService.deleteProducto(id).subscribe(( _)=>{
      this.listar();
    });

  }

  agregar() {
    this.router.navigate(['/producto/add'])
  }

  editar(id: number) {
    this.router.navigate(['/producto/edit/' + id])
  }

}
