import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private get getUrl(){
    return "https://rpeas01dwcatalogoeess02.azurewebsites.net/auth"
  }


  constructor(private http:HttpClient) { }

  getToken(){

    let header = new HttpHeaders({
      'username':'admin',
      'password':'Admin$Everis',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'*',
      'Access-Control-Allow-Headers':'*'
    })


    return this.http.get<any>(this.getUrl, {headers:header})

  }

  logout() {
    sessionStorage.clear();
  }
  
}
