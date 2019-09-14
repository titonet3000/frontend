import { LoginResponse } from './../models/login-response';
import { UserLogin } from './../models/user-login';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  private get getUrl(){
    return "https://rpeas01dwcatalogoeess02.azurewebsites.net/usuario"
  }

  private token:any

  constructor(private http:HttpClient) { }

  validarUsuario(entity:UserLogin){

    let password:string = entity.PASSWORD
    let key = crypto.enc.Utf8.parse("KeyCatalogRepsol")
    let iv = crypto.enc.Utf8.parse("KeyCatalogRepsol")
    var hashedPass = crypto.AES.encrypt(crypto.enc.Utf8.parse(password), key,
    {
      keySize: 128 / 8,
      iv: iv,
      mode: crypto.mode.CBC,
      padding: crypto.pad.Pkcs7
    }).toString()

    let hashedPass64 = crypto.enc.Base64.parse(hashedPass)
    let hashedPassHEX = hashedPass64.toString(crypto.enc.Hex)


    entity.PASSWORD = hashedPassHEX

    this.token = sessionStorage.getItem("token")

    let header = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let params = new HttpParams()
    .append("CODIGO_USUARIO",entity.CODIGO_USUARIO)
    .append("PASSWORD", entity.PASSWORD)
    .append("ID_EMPRESA", entity.ID_EMPRESA);

    let requestBody = params.toString()

    return this.http.post<LoginResponse>(this.getUrl, requestBody, {headers:header})



  }

  

  
}
