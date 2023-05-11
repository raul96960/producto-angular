import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private _API = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  //C
  addCategoria(categoria: any) {
    return this._http.post(`${this._API}/categorias`, categoria);
  }

  //R
  getCategorias() {
    return this._http.get(`${this._API}/categorias`);
  }

  //R
  getCategoria(id:number) {
    return this._http.get(`${this._API}/categorias/${id}`);
  }

  //U
  updateCategoria(id: number, categoria: any) {
    return this._http.put(`${this._API}/categorias/${id}`, categoria);
  }

  //D
  deleteCategoria(id: any) {
    return this._http.delete(`${this._API}/categorias/${id}`);
  }
}
