import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _http: HttpClient, private _router: Router) {}

  GetAdmin() {
    return this._http.get<any>('http://localhost:3000/api/admin/login');
  }
}
