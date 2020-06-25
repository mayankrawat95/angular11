import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


export interface AuthResponseData{
  localId: string,
  email: string,
  passwordHash: string,
  providerUserInfo,
  idToken: string,
  refreshToken:string,
  expiresIn: string
}


@Injectable({
  providedIn: 'root'
})
export class ResetPwdService {

  constructor(private http: HttpClient, private router: Router) { }

  

  changePwd(password: string){
    
    var user = JSON.parse(localStorage.getItem('user'));
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + environment.firebaseAPIKey,
    {
      idToken: user.idToken,
      password: password,
      returnSecureToken: Boolean
    })
  }
}
