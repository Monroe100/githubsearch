import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {
  term:string

  @Output() searchTerm = new EventEmitter<any>()

searchProfile(){
  console.log("Recieved: "+this.term);
  this.searchTerm.emit(this.term);
  this.term = '';
  
}

constructor() { 
}
  ngOnInit() {
    // this.http.get(this.link).subscribe((res:any)=>{
    //   this.repos=res
    //   console.log("Data: " +this.repos);
      
    // });
  }

}
