import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { Users } from "../users";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:string;
  userProfile:Users

  SearchTerm(sTerm){
    console.log("Working with: "+sTerm);
    this.userService.userSearch(sTerm);
  }
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userProfile = this.userService.profile
  }

}
