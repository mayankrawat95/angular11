import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ResetPwdService } from './reset-pwd.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

 p1: string;
 p2: string;
 pwdchanged: string;
 error: string;
 SamePwd: string;

  constructor(private resetPWDservice: ResetPwdService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const password = form.value.password;
    const password1 = form.value.password1;
    console.log(password);

    if(password === password1){
      this.resetPWDservice.changePwd(password).subscribe(response => {
        console.log(response);
        this.pwdchanged = "Password changed successfully";
      }, errorMessage => {
        this.error = "There is an Error";
      })
    }else{
        this.SamePwd = "Change password and Confirm password must be same"
    }
    

    //this.router.navigate(['/recipes']);

  }

}
