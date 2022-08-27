import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  


  constructor(private http:HttpClient) { }

  headers = new HttpHeaders ({
  'Accept':'application/json',
  'content-type':'application/json'
  });
  options = {headers: this.headers}

  body = {firstname:'koffi', lastname:'ange', cretiondate:'27/08/2022', updatedate:'27/08/2022'}


  url = "https://127.0.0.1:8000/api/users/";
  urlcreate = "https://localhost:8000/api/users"
  users(){
    return this.http.get<any>(this.url,this.options);
  }
  create(){
    return this.http.post<any>(this.urlcreate,this.options);
  }

}
 