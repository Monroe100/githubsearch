import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment' 
import {Users} from './users'
import {Repositories} from './repositories'
import { reject, resolve } from 'q';
@Injectable()
export class UsersService {
  profile:Users
  repo:Repositories
  return:any
  constructor(private http:HttpClient) {
    this.profile = new Users("","","",0,"");
    this.repo = new Repositories("","","",new Date());
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
    let promise = new Promise((resolve,reject)=>{
      this.http.get<Repos>(environment.url+sTerm+'/repos'+environment.KEY).toPromise().then(
        res=>{
          this.return = res;
          
          this.repo.name = res.name;
          this.repo.description = res.description;
          this.repo.link = res.html_url;
          this.repo.updated = res.updated_at;
          resolve();
        }
      );
      });
    return promise
  }
}
