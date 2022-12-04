import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = 'http://localhost:3000/api/user/';

  constructor(private _http: HttpClient) {}

  AddUser(obj: any) {
    return this._http.post<any>(this.apiURL, obj);
  }
  GetUser() {
    return this._http.get<any>(this.apiURL);
  }
  DeleteUser(id: any) {
    return this._http.delete<any>(this.apiURL + id._id);
  }
  UpdateUser(id: any, obj: any) {
    return this._http.delete<any>(this.apiURL + id._id, obj);
  }
}
