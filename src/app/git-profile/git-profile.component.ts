import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {
// http:HttpClient

repos=[];

link = 'https://api.github.com/users/Monroe100/repos?access_token=1526a37ff44f83ff7c9591722772a9b3903d6f01';

  constructor(private http:HttpClient) { 
    this.http = http
  }

  ngOnInit() {
    this.http.get(this.link).subscribe((res:any)=>{
      this.repos=res
      console.log("Data: " +this.repos);
      
    });
  }

}
