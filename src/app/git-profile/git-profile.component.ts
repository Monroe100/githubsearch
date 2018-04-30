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


  constructor(private http:HttpClient) { 
    this.http = http
  }

  ngOnInit() {
    // this.http.get(this.link).subscribe((res:any)=>{
    //   this.repos=res
    //   console.log("Data: " +this.repos);
      
    // });
  }

}
