import { Component, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{
isLoginMode = true;
isLoading = false;
error = null;
clone: string;


constructor(private authService: AuthService, 
  private router: Router, 
  private componentFactoryResolver: ComponentFactoryResolver){}

onSwitchMode(){
  this.isLoginMode = !this.isLoginMode;
}

onSubmit(form: NgForm){
  if(!form.valid){
    return;
  }
  this.clone = form.value.email;
  const email = form.value.email;
  const password = form.value.password;

  let authObs: Observable<AuthResponseData>

  this.isLoading = true;

  if(this.isLoginMode){
    authObs = this.authService.login(email,password)
    
  }else{
    authObs = this.authService.signup(email, password)
  }
 

  authObs.subscribe(response => {
    console.log(response);
    this.isLoading = false;
    this.router.navigate(['/recipes']);
   
  },
  errorMessage => {
    console.log(errorMessage);
    this.error = errorMessage;
    //this.showErrorAlert(errorMessage)
    this.isLoading = false;
    
  });


  
}
  onErrorHandling(){
    this.error = null;
    
  }


}

 

 


