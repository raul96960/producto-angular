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
import { CategoriaService } from '../../service/categoria.service';


@Component({
  selector: 'app-categoria-add',
  templateUrl: './categoria-add.component.html',
  styleUrls: ['./categoria-add.component.scss']
})
export class CategoriaAddComponent implements OnInit{
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required]],
  });

  dataCategoria: any = '';
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {

    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activateRouter.params
      .pipe(switchMap(({ id }) => this.categoriaService.getCategoria(id)))
      .subscribe((categoria) => {
        this.dataCategoria = categoria;
        this.miFormulario.reset(this.dataCategoria);
      });
  }

  regresar() {
    this.router.navigate(['/categoria/list']);
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

    // console.log(this.miFormulario.value);
    if (this.dataCategoria.id) {
      this.categoriaService
        .updateCategoria(this.dataCategoria.id, this.miFormulario.value)
        .subscribe(( _) => {
          this.miFormulario.reset();
          this.regresar();
        });

    } else {
      this.categoriaService
        .addCategoria(this.miFormulario.value)
        .subscribe(( _) => {
          this.miFormulario.reset();
          this.regresar();
        });
    }
  }

}
