import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { Users } from "../users";
import { Repositories } from "../repositories";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo: Repositories

  SearchTerm(user){
    this.repositories(user)
  }

  repositories(user){
    this.userService.repositories(user)
  }

  constructor(public userService:UsersService) { }

  ngOnInit() {
    this.repo = this.userService.repo
  }

}
