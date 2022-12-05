import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _http: HttpClient, private _router: Router) {}
  apiURL = 'http://localhost:3000/api/admin/login/';
  GetAdmin() {
    return this._http.get<any>(this.apiURL);
  }
  DeleteAdmin(obj: any) {
    return this._http.delete<any>(
      'http://localhost:3000/api/category/' + obj._id
    );
  }
  getCAdminById(id: any) {
    return this._http.get('http://localhost:3000/api/category/' + id);
  }
  UpdateAdmin(id: any, obj: any) {
    return this._http.put('http://localhost:3000/api/category/' + id, obj);
  }
}
