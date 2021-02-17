import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000"

  // Login methods depending on the type of the user
  loginAdmin(username: string, password: string){
    const data = {
      username,
      password
    };
    return this.http.post(`${this.uri}/loginAdmin`, data);
  }
  loginStudent(username: string, password: string){
    const data = {
      username,
      password
    };
    return this.http.post(`${this.uri}/loginStudent`, data);
  }
  loginEmployee(username: string, password: string){
    const data = {
      username,
      password
    };
    return this.http.post(`${this.uri}/loginEmployee`, data);
  }

}
