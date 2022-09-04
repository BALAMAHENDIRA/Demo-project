import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ApiUrl = "https://jsonplaceholder.typicode.com/" ;
  newUrl = "http://localhost:42699/";
  
  constructor(private _http: HttpClient) { }

  getData(url: string){
    return this._http.get(`${this.ApiUrl}${url}`)
   }

  getUser(url: string){
    return this._http.get(`${this.newUrl}${url}`)
  }
}
 