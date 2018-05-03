import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { Users } from "../users";
import { Repositories } from "../repositories";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:string;
  repos:Repositories
  userProfile:Users

  SearchTerm(sTerm){
    console.log("Working with: "+sTerm);
    this.userService.userSearch(sTerm);
    this.repository(sTerm);
  }
  repository(sTerm){
    this.userService.repositories(sTerm)
  }
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userProfile = this.userService.profile;
    this.repos = this.userService.repo
  }

}
