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

  constructor(private resetPWDservice: ResetPwdService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const password = form.value.password;
    
    console.log(password);

    this.resetPWDservice.changePwd(password).subscribe(response => {
      console.log(response);
      this.pwdchanged = "Password changed successfully";
    }, errorMessage => {
      this.error = "There is an Error";
    })

    //this.router.navigate(['/recipes']);

  }

}
