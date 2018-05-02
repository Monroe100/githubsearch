import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment' 
import {Users} from './users'
@Injectable()
export class UsersService {
  profile:Users

  constructor(private http:HttpClient) {
    this.profile = new Users("","","",0,"");
   }

  userSearch(sTerm:string){
    interface SearchResults{
      name:string;
      avatar_url:any;
      public_repos:number;
      html_url:any;
      bio:any
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<SearchResults>(environment.url+sTerm+environment.KEY).toPromise().then(
        res=>{
          this.profile.name = res.name
          this.profile.link = res.html_url
          this.profile.bio = res.bio
          this.profile.avatar = res.avatar_url
          this.profile.repos = res.public_repos
        }
      );
    });
    return promise;
  }

  repositories(sTerm){
    interface Repos{
      name:string;
      html_url:any;
      description:any;
      updated_at:Date
    }
    let promise
  }
}
