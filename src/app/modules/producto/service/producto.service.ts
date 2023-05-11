import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private _API = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  //C
  addProducto(producto: any) {
    return this._http.post(`${this._API}/productos`, producto);
  }

  //R
  getProductos() {
    return this._http.get(`${this._API}/productos`);
  }

  //R
  getProducto(id:number) {
    return this._http.get(`${this._API}/productos/${id}`);
  }

  //U
  updateProducto(id: number, producto: any) {
    return this._http.put(`${this._API}/productos/${id}`, producto);
  }

  //D
  deleteProducto(id: any) {
    return this._http.delete(`${this._API}/productos/${id}`);
  }
}
