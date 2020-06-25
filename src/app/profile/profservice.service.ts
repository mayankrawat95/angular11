import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfserviceService {

  profileChanged = new Subject<Profile>();

  public profile: Profile =  new Profile('', '', '', '')

  constructor() { }

  updateProfile(newProfile: Profile){
    this.profile = newProfile;
    this.profileChanged.next(this.profile);
  }
}
