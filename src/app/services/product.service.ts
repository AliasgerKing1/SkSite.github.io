import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  apiURL = 'http://localhost:3000/api/product/';
  AddProduct(obj: any) {
    return this._http.post<any>(this.apiURL, obj);
  }
  GetProduct() {
    return this._http.get<any>(this.apiURL);
  }
  DeleteProduct(id: any) {
    return this._http.delete<any>(this.apiURL + id._id);
  }
}
