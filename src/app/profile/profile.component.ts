import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profile } from './profile.model';
import { ProfserviceService } from './profservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f', {static: false}) Form: NgForm
  name1: string;
  DOB1: string;
 email1: string;
 gender1: string;

  FormVisibility = false;

  

  constructor(private profileService: ProfserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

   this.profileService.profile.name = form.value.name;
   this.profileService.profile.DOB = form.value.DOB;
   this.profileService.profile.Email = form.value.email;
   this.profileService.profile.Gender = form.value.gender;

    const newProfile =  new Profile(
     this.name1 = this.profileService.profile.name,
     this.DOB1 =  this.profileService.profile.DOB,
     this.email1 = this.profileService.profile.Email,
      this.gender1 = this.profileService.profile.Gender
    )

    this.profileService.updateProfile(newProfile);

    this.FormVisibility = false;
   
  }

 updateProfile(newProfile){
  newProfile = new Profile(this.name1, this.DOB1, this.email1, this.gender1);
  return newProfile.slice();
  }

  showForm(){
    this.FormVisibility = true;
  }

}
