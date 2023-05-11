import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { ProductoService } from '../../service/producto.service';
import { CategoriaService } from 'src/app/modules/categoria/service/categoria.service';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.scss'],
})
export class ProductoAddComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required]],
    descripcion: [, [Validators.required]],
    stock: [, [Validators.required]],
    precio: [, [Validators.required]],
    categoriaId: [, [Validators.required]],
  });

  dataProducto: any = '';
  dataCategoria: any = '';
  constructor(
    private productoService: ProductoService,
    private router: Router,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    
    this.categoriaService.getCategorias().subscribe((data) => {
      //console.log(data)
      this.dataCategoria = data;
    });

    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activateRouter.params
      .pipe(switchMap(({ id }) => this.productoService.getProducto(id)))
      .subscribe((producto) => {
        this.dataProducto = producto;
        this.miFormulario.reset(this.dataProducto);
      });

  }

  regresar() {
    this.router.navigate(['/producto/list']);
  }

  campoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.errors &&
      this.miFormulario.get(campo)?.touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      console.log('formulario invalido');
      //marca todos los campos como tocados
      this.miFormulario.markAllAsTouched();
      return;
    }

    //console.log(this.miFormulario.value);
    if (this.dataProducto.id) {
      this.productoService
        .updateProducto(this.dataProducto.id, this.miFormulario.value)
        .subscribe((_) => {
          this.miFormulario.reset();
          this.regresar();
        });
    } else {
      this.productoService
        .addProducto(this.miFormulario.value)
        .subscribe((_) => {
          this.miFormulario.reset();
          this.regresar();
        });
    }
  }
}
